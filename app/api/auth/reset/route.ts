import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import crypto from 'crypto'; // ← Missing import!

export async function POST(req: Request) {
  try {
    console.log('[RESET] Starting password reset request');
    await connectDB();
    
    const { token, password } = await req.json();
    
    // Validation
    if (!token || !password) {
      console.log('[RESET] Missing token or password');
      return NextResponse.json({ error: 'Token and password required' }, { status: 400 });
    }

    // Validate password strength
    if (password.length < 8) {
      console.log('[RESET] Password too short');
      return NextResponse.json({ error: 'Password must be at least 8 characters' }, { status: 400 });
    }

    console.log('[RESET] Looking up user with token...');
    
    // Hash the provided token and look up by hash (we don't store raw tokens)
    const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
    
    const user = await User.findOne({ 
      resetTokenHash: tokenHash, 
      resetTokenExpiry: { $gt: new Date() } 
    });
    
    if (!user) {
      console.log('[RESET] Invalid or expired token');
      return NextResponse.json({ error: 'Invalid or expired token' }, { status: 400 });
    }

    console.log(`[RESET] User found: ${user.email}, updating password...`);
    
    // Hash the new password
    const hashed = await bcrypt.hash(password, 10);
    
    // Update user password and clear reset token fields
    user.password = hashed;
    user.resetTokenHash = undefined;
    user.resetTokenExpiry = undefined;
    await user.save();

    console.log(`[RESET] ✅ Password reset successful for: ${user.email}`);
    
    return NextResponse.json({ 
      message: 'Password reset successful. You can now log in with your new password.',
      success: true
    });
    
  } catch (err) {
    console.error('[RESET] ❌ Fatal error:', err instanceof Error ? err.message : String(err));
    if (err instanceof Error) {
      console.error('[RESET] Error stack:', err.stack);
    }
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}