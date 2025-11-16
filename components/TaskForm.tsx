'use client';
import axios from 'axios';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function TaskForm() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim()) return;

    setIsSubmitting(true);
    try {
      await axios.post('/api/tasks', { title, description });
      
      setTitle('');
      setDescription('');
      
      // Show success animation
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
      
      // Prefer calling the client-side refresh if available (avoids full reload)
      // call typed global if available
      if (typeof window !== 'undefined') {
        const w = window as unknown as { refreshTasks?: () => void };
        if (typeof w.refreshTasks === 'function') {
          w.refreshTasks();
        } else {
          router.refresh();
        }
      } else {
        router.refresh();
      }
    } catch (err) {
      console.error('Error creating task', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      {/* Success Toast */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="bg-linear-to-r from-[#34D399] to-[#22D3EE] text-white px-6 py-3 rounded-xl shadow-lg shadow-[#34D399]/50 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium">Task added successfully!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={submit} className="space-y-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-linear-to-br from-[#3B82F6] to-[#22D3EE] rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Create New Task</h2>
            <p className="text-sm text-slate-400">Add a task to your list</p>
          </div>
        </div>

        {/* Title Input */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-300">
            Task Title <span className="text-[#EF4444]">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter task title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onFocus={() => setFocusedField('title')}
              onBlur={() => setFocusedField(null)}
              className="w-full px-4 py-3 bg-[#0F172A] border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 transition-all duration-300"
              required
            />
            {focusedField === 'title' && (
              <motion.div
                layoutId="formInputGlow"
                className="absolute inset-0 rounded-xl border-2 border-[#3B82F6] pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Description Input */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-300">
            Description <span className="text-slate-500">(Optional)</span>
          </label>
          <div className="relative">
            <textarea
              placeholder="Add more details about your task..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              onFocus={() => setFocusedField('description')}
              onBlur={() => setFocusedField(null)}
              rows={3}
              className="w-full px-4 py-3 bg-[#0F172A] border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#22D3EE] focus:ring-2 focus:ring-[#22D3EE]/20 transition-all duration-300 resize-none"
            />
            {focusedField === 'description' && (
              <motion.div
                layoutId="formInputGlow"
                className="absolute inset-0 rounded-xl border-2 border-[#22D3EE] pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
            <div className="absolute top-3 right-3 pointer-events-none">
              <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Add additional context or notes</span>
            <span>{description.length} characters</span>
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting || !title.trim()}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          className="w-full py-3.5 px-6 bg-linear-to-r from-[#3B82F6] to-[#22D3EE] text-white font-semibold rounded-xl shadow-lg shadow-[#3B82F6]/50 hover:shadow-[#3B82F6]/70 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Adding Task...
            </span>
          ) : (
            <>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Task
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-[#22D3EE] to-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </>
          )}
        </motion.button>

        {/* Quick Tips */}
        <div className="mt-4 p-4 bg-[#0F172A]/50 rounded-xl border border-slate-800/50">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-[#3B82F6]/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-slate-300">Pro Tips</p>
              <ul className="text-xs text-slate-500 space-y-1">
                <li>• Keep titles short and actionable</li>
                <li>• Use descriptions for additional context</li>
                <li>• Press Enter to quickly add tasks</li>
              </ul>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
