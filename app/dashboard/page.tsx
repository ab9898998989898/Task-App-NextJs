"use client"
import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import TaskForm from '@/components/TaskForm';
import TaskCard from '@/components/TaskCard';

type Task = {
  _id: string;
  title: string;
  description?: string;
  completed?: boolean;
  userId?: string;
};

declare global {
  interface Window { refreshTasks?: () => void }
}

export default function DashboardPage() {
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTasks = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/tasks', { cache: 'no-store' });
      if (res.status === 401) {
        router.push('/login');
        return;
      }
      if (!res.ok) {
        throw new Error(`Failed to load tasks: ${res.status}`);
      }
      const data = await res.json();
      setTasks(data || []);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      console.error('Error fetching tasks:', message);
      setError(message || 'Failed to load tasks');
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  useEffect(() => {
    window.refreshTasks = fetchTasks;
    return () => { window.refreshTasks = undefined; };
  }, [fetchTasks]);

  return (
    <div className="min-h-screen bg-[#0F172A] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold bg-linear-to-r from-[#3B82F6] via-[#22D3EE] to-[#3B82F6] bg-clip-text text-transparent animate-gradient">
            Your Task Dashboard
          </h1>
          <p className="text-slate-400 text-lg">Manage your tasks efficiently</p>
        </div>

        {/* Task Form with Animation Wrapper */}
        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-r from-[#3B82F6] to-[#22D3EE] rounded-2xl blur-xl opacity-20 animate-pulse"></div>
          <div className="relative bg-[#1E293B] rounded-2xl p-6 border border-slate-700/50 shadow-2xl hover:shadow-[#3B82F6]/20 transition-shadow duration-300">
            <TaskForm />
          </div>
        </div>

        {/* Tasks Section */}
        <div className="space-y-6">
          {/* Stats Bar */}
          <div className="flex items-center justify-between bg-[#1E293B] rounded-xl p-4 border border-slate-700/50">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse"></div>
              <span className="text-slate-300 font-medium">
                {loading ? 'Loading...' : `${tasks.length} ${tasks.length === 1 ? 'Task' : 'Tasks'}`}
              </span>
            </div>
            <div className="text-sm text-slate-500">Keep going! 🚀</div>
          </div>

          {loading ? (
            <p className="text-center text-slate-400">Loading tasks...</p>
          ) : error ? (
            <p className="text-center text-red-400">{error}</p>
          ) : tasks.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 space-y-4">
              <div className="relative">
                <div className="w-24 h-24 bg-linear-to-br from-[#3B82F6] to-[#22D3EE] rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-12 h-12 text-[#22D3EE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
              </div>
              <p className="text-slate-400 text-lg font-medium">No tasks yet</p>
              <p className="text-slate-500 text-sm">Create your first task to get started!</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {tasks.map((task, index) => (
                <div
                  key={task._id}
                  className="transform transition-all duration-300 hover:scale-[1.02]"
                  style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
                >
                  <TaskCard task={task} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient { background-size: 200% 200%; animation: gradient 3s ease infinite; }
      `}</style>
    </div>
  );
}
