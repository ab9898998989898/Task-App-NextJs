import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

async function sendEmailWithSMTP(to: string, from: string, subject: string, text: string, html?: string) {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port || !user || !pass) {
    throw new Error('SMTP configuration missing (SMTP_HOST/SMTP_PORT/SMTP_USER/SMTP_PASS)');
  }

  console.log('[SMTP] Creating transporter with:', { host, port, user });
  
  // Fixed: Now using environment variables instead of hardcoded Ethereal credentials
  const transporter = nodemailer.createTransport({
    host: host,
    port: port,
    secure: false, // true for 465, false for other ports
    auth: {
      user: user,
      pass: pass
    },
    // Gmail-specific settings
    tls: {
      rejectUnauthorized: false
    }
  });

  console.log('[SMTP] Verifying connection...');
  await transporter.verify();
  console.log('[SMTP] Connection verified successfully');

  console.log(`[SMTP] Sending mail to ${to}...`);
  const info = await transporter.sendMail({
    from: `"Task Manager" <${from}>`, // Friendly name + email
    to,
    subject,
    text,
    html,
  });

  console.log('[SMTP] Mail sent successfully!');
  console.log('[SMTP] Message ID:', info.messageId);
  return info;
}

export async function POST(req: Request) {
  try {
    console.log('[FORGOT] Starting forgot password request');
    await connectDB();
    
    const { email } = await req.json();
    if (!email) {
      console.log('[FORGOT] Email not provided');
      return NextResponse.json({ error: 'Email required' }, { status: 400 });
    }

    console.log(`[FORGOT] Looking up user with email: ${email}`);
    const user = await User.findOne({ email });
    
    if (!user) {
      console.log(`[FORGOT] User not found: ${email} (privacy response sent)`);
      // Still return success to prevent email enumeration
      return NextResponse.json({ message: 'If an account exists, you will receive reset instructions' });
    }

    console.log(`[FORGOT] User found: ${user.email}`);
    
    // Generate reset token
    const token = crypto.randomBytes(32).toString('hex');
    const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
    
    // Save token to user (expires in 1 hour)
    user.resetTokenHash = tokenHash;
    user.resetTokenExpiry = new Date(Date.now() + 1000 * 60 * 60);
    await user.save();
    console.log(`[FORGOT] Token saved for user: ${user.email}`);

    // Check if SMTP is configured
    const fromEmail = process.env.FROM_EMAIL;
    
    if (process.env.SMTP_HOST && process.env.SMTP_PORT && process.env.SMTP_USER && process.env.SMTP_PASS && fromEmail) {
      try {
        console.log(`[FORGOT] Sending reset email to ${user.email}`);
        
        const resetUrl = `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/reset-password?token=${token}`;
        const subject = 'Password Reset Request - Task Manager';
        
        const text = `Hello,

You requested a password reset for your Task Manager account.

Click the link below to reset your password:
${resetUrl}

Or use this token manually: ${token}

This link will expire in 1 hour.

If you didn't request this, please ignore this email.

Best regards,
Task Manager Team`;

        const html = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #3B82F6;">Password Reset Request</h2>
            <p>Hello,</p>
            <p>You requested a password reset for your Task Manager account.</p>
            <p>Click the button below to reset your password:</p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="${resetUrl}" style="background: linear-gradient(to right, #3B82F6, #22D3EE); color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; display: inline-block;">Reset Password</a>
            </div>
            <p style="color: #666; font-size: 14px;">Or copy and paste this link into your browser:</p>
            <p style="color: #3B82F6; word-break: break-all;">${resetUrl}</p>
            <p style="color: #666; font-size: 12px; margin-top: 30px;">This link will expire in 1 hour.</p>
            <p style="color: #666; font-size: 12px;">If you didn't request this, please ignore this email.</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
            <p style="color: #999; font-size: 12px; text-align: center;">Task Manager Team</p>
          </div>
        `;
        
        await sendEmailWithSMTP(user.email, fromEmail, subject, text, html);
        console.log(`[FORGOT] ✅ Email sent successfully to ${user.email}`);
        
        return NextResponse.json({ 
          message: 'If an account exists, reset instructions were sent',
          success: true 
        });
        
      } catch (e) {
        console.error('[FORGOT] ❌ SMTP error:', e instanceof Error ? e.message : String(e));
        if (e instanceof Error) {
          console.error('[FORGOT] Error stack:', e.stack);
        }
        // Still return success for security (don't reveal if email failed)
        return NextResponse.json({ 
          message: 'If an account exists, reset instructions were sent',
          success: false 
        });
      }
    }

    // SMTP not configured - log token for development
    console.log(`[FORGOT] ⚠️ SMTP not configured, logging token for dev: ${user.email}`);
    console.info(`\n${'='.repeat(60)}`);
    console.info(`PASSWORD RESET TOKEN FOR ${user.email}:`);
    console.info(`Token: ${token}`);
    console.info(`Reset URL: ${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/reset-password?token=${token}`);
    console.info(`${'='.repeat(60)}\n`);
    
    return NextResponse.json({ 
      message: 'If an account exists, reset instructions were sent',
      devToken: process.env.NODE_ENV === 'development' ? token : undefined
    });
    
  } catch (err) {
    console.error('[FORGOT] Fatal error:', err instanceof Error ? err.message : String(err));
    if (err instanceof Error) {
      console.error('[FORGOT] Error stack:', err.stack);
    }
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}