'use client';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const { data: session } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-10 h-10 bg-gradient-to-br from-[#3B82F6] to-[#22D3EE] rounded-xl flex items-center justify-center shadow-lg shadow-[#3B82F6]/30"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </motion.div>
            <span className="font-bold text-xl bg-gradient-to-r from-[#3B82F6] to-[#22D3EE] bg-clip-text text-transparent">
              TaskFlow
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {!session ? (
              <>
                <Link href="/login">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 text-slate-300 hover:text-[#22D3EE] transition-colors font-medium"
                  >
                    Login
                  </motion.button>
                </Link>
                <Link href="/signup">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-gradient-to-r from-[#3B82F6] to-[#22D3EE] text-white font-semibold rounded-lg shadow-lg shadow-[#3B82F6]/30 hover:shadow-[#3B82F6]/50 transition-all duration-300"
                  >
                    Sign Up
                  </motion.button>
                </Link>
              </>
            ) : (
              <>
                {/* User Info */}
                <div className="flex items-center gap-3 px-4 py-2 bg-[#1E293B] rounded-lg border border-slate-700/50">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#22D3EE] to-[#3B82F6] rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {session.user?.name?.charAt(0).toUpperCase() || 'U'}
                    </span>
                  </div>
                  <span className="text-slate-300 font-medium">
                    {session.user?.name || 'User'}
                  </span>
                </div>

                <Link href="/dashboard">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 text-slate-300 hover:text-[#22D3EE] transition-colors font-medium"
                  >
                    Dashboard
                  </motion.button>
                </Link>

                <motion.button
                  onClick={() => signOut()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-[#1E293B] text-slate-300 hover:text-white border border-slate-700 hover:border-[#EF4444] font-semibold rounded-lg transition-all duration-300"
                >
                  Logout
                </motion.button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-[#22D3EE] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-3 border-t border-slate-800/50">
                {!session ? (
                  <>
                    <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                      <motion.div
                        whileTap={{ scale: 0.98 }}
                        className="block px-4 py-3 text-slate-300 hover:text-[#22D3EE] hover:bg-[#1E293B] rounded-lg transition-all"
                      >
                        Login
                      </motion.div>
                    </Link>
                    <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                      <motion.div
                        whileTap={{ scale: 0.98 }}
                        className="block px-4 py-3 bg-gradient-to-r from-[#3B82F6] to-[#22D3EE] text-white font-semibold rounded-lg text-center shadow-lg shadow-[#3B82F6]/30"
                      >
                        Sign Up
                      </motion.div>
                    </Link>
                  </>
                ) : (
                  <>
                    {/* Mobile User Info */}
                    <div className="flex items-center gap-3 px-4 py-3 bg-[#1E293B] rounded-lg border border-slate-700/50">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#22D3EE] to-[#3B82F6] rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">
                          {session.user?.name?.charAt(0).toUpperCase() || 'U'}
                        </span>
                      </div>
                      <div>
                        <div className="text-slate-200 font-medium">
                          {session.user?.name || 'User'}
                        </div>
                        <div className="text-slate-500 text-sm">
                          {session.user?.email || ''}
                        </div>
                      </div>
                    </div>

                    <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
                      <motion.div
                        whileTap={{ scale: 0.98 }}
                        className="block px-4 py-3 text-slate-300 hover:text-[#22D3EE] hover:bg-[#1E293B] rounded-lg transition-all"
                      >
                        Dashboard
                      </motion.div>
                    </Link>

                    <motion.button
                      onClick={() => {
                        signOut();
                        setIsMobileMenuOpen(false);
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-4 py-3 bg-[#1E293B] text-slate-300 hover:text-white border border-slate-700 hover:border-[#EF4444] font-semibold rounded-lg transition-all text-left"
                    >
                      Logout
                    </motion.button>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}