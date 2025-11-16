"use client";
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('/api/auth/forgot', { email });
      toast.success(res.data?.message || 'If an account exists, check email for instructions.');
    } catch (err: any) {
      toast.error(err.response?.data?.error || 'Request failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center px-4 py-12">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full max-w-md bg-[#1E293B] p-8 rounded-3xl border border-slate-700/50">
        <h2 className="text-2xl font-bold text-white mb-4">Forgot your password?</h2>
        <p className="text-slate-400 mb-6">Enter your email and we'll send reset instructions.</p>
        <form onSubmit={submit} className="space-y-4">
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="you@example.com" required className="w-full px-4 py-3 bg-[#0F172A] border border-slate-700 rounded-xl text-slate-200" />
          <button disabled={loading} className="w-full py-3 bg-linear-to-r from-[#3B82F6] to-[#22D3EE] text-white rounded-xl">{loading ? 'Sending...' : 'Send reset'}</button>
        </form>
        {/* Token is never shown to client for privacy; check email (or server logs in dev). */}
      </motion.div>
    </div>
  );
}
