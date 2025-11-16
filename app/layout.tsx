import './globals.css';
import Providers from '@/components/Provider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Task App',
  description: 'A clean, production-ready Next.js task manager'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0F172A] text-slate-100 antialiased">
        <Providers>
          {/* Animated Background */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {/* Gradient Orbs */}
            <div 
              className="absolute w-[600px] h-[600px] bg-[#3B82F6] rounded-full blur-3xl opacity-20 animate-float-slow"
              style={{ top: '-10%', left: '-10%' }}
            />
            <div 
              className="absolute w-[500px] h-[500px] bg-[#22D3EE] rounded-full blur-3xl opacity-20 animate-float-medium"
              style={{ bottom: '-10%', right: '-10%' }}
            />
            <div 
              className="absolute w-[400px] h-[400px] bg-[#34D399] rounded-full blur-3xl opacity-10 animate-float-fast"
              style={{ top: '40%', right: '20%' }}
            />
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
            
            {/* Radial Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />
          </div>

          {/* Main Content Wrapper */}
          <div className="relative flex flex-col min-h-screen">
            {/* Navbar with backdrop blur */}
            <div className="sticky top-0 z-50 backdrop-blur-xl bg-[#0F172A]/80 border-b border-slate-800/50">
              <Navbar />
            </div>

            {/* Main Content Area */}
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Content Container with subtle backdrop */}
              <div className="relative">
                {children}
              </div>
            </main>

            {/* Footer with backdrop blur */}
            <div className="relative backdrop-blur-xl bg-[#0F172A]/80 border-t border-slate-800/50 mt-auto">
              <Footer />
            </div>
          </div>

          {/* Scroll Progress Indicator */}
          <div className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-[#3B82F6] via-[#22D3EE] to-[#34D399] origin-left z-[100] scroll-indicator" />
        </Providers>

        <style>{`
          @keyframes float-slow {
            0%, 100% {
              transform: translate(0, 0) scale(1);
            }
            33% {
              transform: translate(100px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-50px, 100px) scale(0.9);
            }
          }

          @keyframes float-medium {
            0%, 100% {
              transform: translate(0, 0) scale(1);
            }
            33% {
              transform: translate(-100px, 100px) scale(1.05);
            }
            66% {
              transform: translate(50px, -50px) scale(0.95);
            }
          }

          @keyframes float-fast {
            0%, 100% {
              transform: translate(0, 0) scale(1);
            }
            50% {
              transform: translate(50px, -50px) scale(1.15);
            }
          }

          .animate-float-slow {
            animation: float-slow 20s ease-in-out infinite;
          }

          .animate-float-medium {
            animation: float-medium 25s ease-in-out infinite;
          }

          .animate-float-fast {
            animation: float-fast 15s ease-in-out infinite;
          }

          /* Scroll Progress Indicator */
          .scroll-indicator {
            transform-origin: left;
            transform: scaleX(0);
            transition: transform 0.1s ease-out;
          }

          /* Custom Scrollbar */
          ::-webkit-scrollbar {
            width: 12px;
          }

          ::-webkit-scrollbar-track {
            background: #0F172A;
          }

          ::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #3B82F6, #22D3EE);
            border-radius: 6px;
            border: 3px solid #0F172A;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, #22D3EE, #3B82F6);
          }

          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
          }

          /* Selection color */
          ::selection {
            background-color: rgba(59, 130, 246, 0.3);
            color: #22D3EE;
          }

          ::-moz-selection {
            background-color: rgba(59, 130, 246, 0.3);
            color: #22D3EE;
          }
        `}</style>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Scroll Progress Indicator
              window.addEventListener('scroll', () => {
                const indicator = document.querySelector('.scroll-indicator');
                if (indicator) {
                  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                  const scrolled = (window.scrollY / windowHeight);
                  indicator.style.transform = \`scaleX(\${scrolled})\`;
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
