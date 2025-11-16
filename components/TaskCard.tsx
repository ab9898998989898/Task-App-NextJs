'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function TaskCard({ task }) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const refreshClient = () => {
    if (typeof window !== 'undefined') {
      const w = window as unknown as { refreshTasks?: () => void };
      if (typeof w.refreshTasks === 'function') {
        w.refreshTasks();
        return;
      }
    }
    router.refresh();
  };

  const toggle = async () => {
    setIsUpdating(true);
    try {
      await axios.put(`/api/tasks/${task._id}`, { completed: !task.completed });
      refreshClient();
    } catch (error) {
      console.error("Failed to update task", error);
    } finally {
      setIsUpdating(false);
    }
  };

  const remove = async () => {
    setIsDeleting(true);
    try {
      await axios.delete(`/api/tasks/${task._id}`);
      refreshClient();
    } catch (error) {
      console.error("Failed to delete task", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9, x: -100 }}
        whileHover={{ y: -4 }}
        className="relative group"
      >
        {/* Glow Effect on Hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#22D3EE] rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        
        {/* Card Content */}
        <div className={`relative p-6 bg-[#1E293B] rounded-2xl border transition-all duration-300 ${
          task.completed 
            ? 'border-[#34D399]/30 bg-[#1E293B]/50' 
            : 'border-slate-700/50 group-hover:border-[#3B82F6]/50'
        }`}>
          {/* Completion Badge */}
          {task.completed && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-[#34D399] to-[#22D3EE] rounded-full flex items-center justify-center shadow-lg shadow-[#34D399]/50"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
          )}

          {/* Task Content */}
          <div className="pr-12">
            <h2 className={`font-semibold text-lg mb-2 transition-all duration-300 ${
              task.completed 
                ? 'line-through text-slate-500' 
                : 'text-white'
            }`}>
              {task.title}
            </h2>
            
            {task.description && (
              <p className={`text-sm leading-relaxed transition-all duration-300 ${
                task.completed 
                  ? 'line-through text-slate-600' 
                  : 'text-slate-400'
              }`}>
                {task.description}
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mt-4">
            <motion.button
              onClick={toggle}
              disabled={isUpdating}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex-1 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                task.completed
                  ? 'bg-slate-700 text-slate-300 hover:bg-slate-600 border border-slate-600'
                  : 'bg-gradient-to-r from-[#34D399] to-[#22D3EE] text-white shadow-lg shadow-[#34D399]/30 hover:shadow-[#34D399]/50'
              }`}
            >
              {isUpdating ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  {task.completed ? (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                      </svg>
                      Undo
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Complete
                    </>
                  )}
                </span>
              )}
            </motion.button>

            <motion.button
              onClick={() => setShowDeleteConfirm(true)}
              disabled={isDeleting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2.5 bg-[#0F172A] hover:bg-[#EF4444] text-slate-400 hover:text-white border border-slate-700 hover:border-[#EF4444] rounded-xl font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group/delete"
            >
              {isDeleting ? (
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {showDeleteConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowDeleteConfirm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#1E293B] rounded-2xl p-6 max-w-md w-full border border-slate-700 shadow-2xl"
            >
              {/* Warning Icon */}
              <div className="w-12 h-12 bg-[#EF4444]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#EF4444]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-white text-center mb-2">Delete Task?</h3>
              <p className="text-slate-400 text-center mb-6">
                Are you sure you want to delete {task.title}? This action cannot be undone.
              </p>

              <div className="flex gap-3">
                <motion.button
                  onClick={() => setShowDeleteConfirm(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-4 py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-medium transition-all"
                >
                  Cancel
                </motion.button>
                <motion.button
                  onClick={() => {
                    setShowDeleteConfirm(false);
                    remove();
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 px-4 py-2.5 bg-[#EF4444] hover:bg-[#DC2626] text-white rounded-xl font-medium transition-all shadow-lg shadow-[#EF4444]/30"
                >
                  Delete
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}