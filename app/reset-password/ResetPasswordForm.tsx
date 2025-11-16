'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import axios from 'axios';
import Link from 'next/link';

export default function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    // Pre-fill token from URL if present
    const urlToken = searchParams.get('token');
    if (urlToken) {
      setToken(urlToken);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!token) {
      setError('Reset token is required');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post('/api/auth/reset', { token, password });
      if (response.data?.message) {
        setSuccess(true);
        setTimeout(() => router.push('/login'), 3000);
        return;
      }
      setError('Unexpected response from server');
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const data = err.response?.data as { error?: string } | undefined;
        setError((data && data.error) || 'Failed to reset password. Please try again.');
      } else {
        setError('Failed to reset password. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-[#0F172A] flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-20 h-20 bg-linear-to-br from-[#34D399] to-[#22D3EE] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-[#34D399]/50">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Password Reset Successful!</h1>
          <p className="text-slate-400 mb-6">Redirecting you to login...</p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-[#22D3EE] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-2 h-2 bg-[#3B82F6] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-2 h-2 bg-[#34D399] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-[#3B82F6] rounded-full blur-3xl opacity-20"
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-[#22D3EE] rounded-full blur-3xl opacity-20"
          animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ bottom: '10%', right: '10%' }}
        />
      </div>

      {/* Reset Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md"
      >
        <div className="absolute inset-0 bg-linear-to-r from-[#3B82F6] to-[#22D3EE] rounded-3xl blur-xl opacity-20" />
        
        <div className="relative bg-[#1E293B] rounded-3xl p-8 sm:p-10 border border-slate-700/50 shadow-2xl">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-8"
          >
            <div className="w-16 h-16 bg-linear-to-br from-[#3B82F6] to-[#22D3EE] rounded-2xl flex items-center justify-center shadow-lg shadow-[#3B82F6]/50">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-[#3B82F6] via-[#22D3EE] to-[#3B82F6] bg-clip-text text-transparent mb-2">
              Reset Password
            </h1>
            <p className="text-slate-400">Enter your new password below</p>
          </motion.div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-[#EF4444]/10 border border-[#EF4444]/50 rounded-xl flex items-start gap-3"
            >
              <svg className="w-5 h-5 text-[#EF4444] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-[#EF4444]">{error}</p>
            </motion.div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Token Input (hidden if pre-filled from URL) */}
            {!searchParams.get('token') && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Reset Token
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter your reset token"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                    onFocus={() => setFocusedField('token')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 bg-[#0F172A] border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 transition-all duration-300"
                    required
                  />
                  {focusedField === 'token' && (
                    <motion.div
                      layoutId="inputGlow"
                      className="absolute inset-0 rounded-xl border-2 border-[#3B82F6] pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </div>
              </motion.div>
            )}

            {/* New Password */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label className="block text-sm font-medium text-slate-300 mb-2">
                New Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 bg-[#0F172A] border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 transition-all duration-300"
                  required
                />
                {focusedField === 'password' && (
                  <motion.div
                    layoutId="inputGlow"
                    className="absolute inset-0 rounded-xl border-2 border-[#3B82F6] pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </div>
              <p className="mt-2 text-xs text-slate-500">Must be at least 8 characters</p>
            </motion.div>

            {/* Confirm Password */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onFocus={() => setFocusedField('confirm')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 bg-[#0F172A] border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#22D3EE] focus:ring-2 focus:ring-[#22D3EE]/20 transition-all duration-300"
                  required
                />
                {focusedField === 'confirm' && (
                  <motion.div
                    layoutId="inputGlow"
                    className="absolute inset-0 rounded-xl border-2 border-[#22D3EE] pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-4 bg-linear-to-r from-[#3B82F6] to-[#22D3EE] text-white font-semibold rounded-xl shadow-lg shadow-[#3B82F6]/50 hover:shadow-[#3B82F6]/70 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Resetting Password...
                </span>
              ) : (
                <>
                  <span className="relative z-10">Reset Password</span>
                  <div className="absolute inset-0 bg-linear-to-r from-[#22D3EE] to-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </>
              )}
            </motion.button>
          </form>

          {/* Back to Login Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 text-center"
          >
            <Link href="/login" className="text-[#22D3EE] hover:text-[#3B82F6] font-medium transition-colors">
              ← Back to Login
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
