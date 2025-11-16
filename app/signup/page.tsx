"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '', name: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const submit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post('/api/auth/signup', form);
      toast.success('User created. Please login.');
      router.push('/login');
    } catch (err: any) {
      if (axios.isAxiosError(err) && err.response?.status === 400) {
        toast.error('User already exists — please login.');
      } else {
        toast.error('Signup failed. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-[#22D3EE] rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '5%', left: '5%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-[#3B82F6] rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ bottom: '5%', right: '5%' }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-[#34D399] rounded-full blur-3xl opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        />
      </div>

      {/* Signup Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md"
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-linear-to-r from-[#22D3EE] via-[#3B82F6] to-[#22D3EE] rounded-3xl blur-xl opacity-20"></div>
        
        {/* Card Content */}
        <div className="relative bg-[#1E293B] rounded-3xl p-8 sm:p-10 border border-slate-700/50 shadow-2xl">
          {/* Logo/Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
            className="flex justify-center mb-8"
          >
            <div className="w-16 h-16 bg-linear-to-br from-[#22D3EE] to-[#3B82F6] rounded-2xl flex items-center justify-center shadow-lg shadow-[#22D3EE]/50">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
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
            <h1 className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-[#22D3EE] via-[#3B82F6] to-[#22D3EE] bg-clip-text text-transparent mb-2">
              Create Account
            </h1>
            <p className="text-slate-400">Join us and start managing your tasks</p>
          </motion.div>

          {/* Form */}
          <form onSubmit={submit} className="space-y-6">
            {/* Name Input */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full pl-10 pr-4 py-3 bg-[#0F172A] border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#22D3EE] focus:ring-2 focus:ring-[#22D3EE]/20 transition-all duration-300"
                  required
                />
                {focusedField === 'name' && (
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

            {/* Email Input */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full pl-10 pr-4 py-3 bg-[#0F172A] border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#22D3EE] focus:ring-2 focus:ring-[#22D3EE]/20 transition-all duration-300"
                  required
                />
                {focusedField === 'email' && (
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

            {/* Password Input */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full pl-10 pr-4 py-3 bg-[#0F172A] border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#22D3EE] focus:ring-2 focus:ring-[#22D3EE]/20 transition-all duration-300"
                  required
                />
                {focusedField === 'password' && (
                  <motion.div
                    layoutId="inputGlow"
                    className="absolute inset-0 rounded-xl border-2 border-[#22D3EE] pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </div>
              <p className="mt-2 text-xs text-slate-500">Must be at least 8 characters</p>
            </motion.div>

            {/* Terms & Conditions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-start space-x-2"
            >
              <input 
                type="checkbox" 
                required
                className="w-4 h-4 mt-0.5 rounded border-slate-700 bg-[#0F172A] text-[#22D3EE] focus:ring-[#22D3EE] focus:ring-offset-0" 
              />
              <label className="text-sm text-slate-400">
                I agree to the{' '}
                <a href="#" className="text-[#22D3EE] hover:text-[#3B82F6] transition-colors">
                  Terms of Service
                </a>
                {' '}and{' '}
                <a href="#" className="text-[#22D3EE] hover:text-[#3B82F6] transition-colors">
                  Privacy Policy
                </a>
              </label>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-4 bg-linear-to-r from-[#22D3EE] to-[#3B82F6] text-white font-semibold rounded-xl shadow-lg shadow-[#22D3EE]/50 hover:shadow-[#22D3EE]/70 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Creating Account...
                </span>
              ) : (
                <>
                  <span className="relative z-10">Create Account</span>
                  <div className="absolute inset-0 bg-linear-to-r from-[#3B82F6] to-[#22D3EE] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </>
              )}
            </motion.button>
          </form>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-8 mb-6 flex items-center"
          >
            <div className="flex-1 h-px bg-slate-700"></div>
            <span className="px-4 text-sm text-slate-500">or</span>
            <div className="flex-1 h-px bg-slate-700"></div>
          </motion.div>

          {/* Login Link */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="text-center text-slate-400"
          >
            Already have an account?{' '}
            <a href="/login" className="text-[#22D3EE] hover:text-[#3B82F6] font-semibold transition-colors">
              Sign in
            </a>
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
