"use client"
import { HelpCircle, Mail, MessageSquare, BookOpen, Shield, CreditCard, Settings, Users, Zap, FileText, Search, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function HelpPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqs = [
    {
      category: "Getting Started",
      icon: BookOpen,
      questions: [
        {
          q: "How do I create an account?",
          a: "Creating an account is simple and takes less than a minute. Click on the 'Sign Up' button in the top right corner of the homepage. You'll be asked to provide your email address, create a secure password, and verify your email. Once verified, you'll have immediate access to all features. We recommend enabling two-factor authentication for added security."
        },
        {
          q: "How do I reset my password?",
          a: "If you've forgotten your password, click on 'Forgot Password' on the login page. Enter your registered email address, and we'll send you a secure password reset link. The link is valid for 24 hours. Follow the instructions in the email to create a new password. Make sure your new password is at least 8 characters long and includes a mix of letters, numbers, and special characters."
        },
        {
          q: "What are the system requirements?",
          a: "Our platform works seamlessly across all modern browsers including Chrome, Firefox, Safari, and Edge (latest 2 versions). We also offer native mobile apps for iOS 13+ and Android 8.0+. A stable internet connection is required, and we recommend at least 5 Mbps for optimal performance. The platform is fully responsive and works on tablets, desktops, and mobile devices."
        },
        {
          q: "How do I navigate the dashboard?",
          a: "The dashboard is designed for intuitive navigation. The main menu is located on the left sidebar, providing quick access to all major features. Use the search bar at the top to quickly find specific tasks or documents. Your recent activities are displayed in the center panel, while notifications and quick actions are accessible from the top-right corner. You can customize your dashboard layout in the settings menu."
        }
      ]
    },
    {
      category: "Account & Billing",
      icon: CreditCard,
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and bank transfers for annual subscriptions. For enterprise plans, we also offer invoice-based billing with NET 30 payment terms. All transactions are processed through secure, PCI-compliant payment gateways. Your payment information is encrypted and never stored on our servers."
        },
        {
          q: "How can I upgrade or downgrade my plan?",
          a: "You can change your subscription plan at any time from the 'Billing' section in your account settings. When upgrading, you'll be charged the prorated difference immediately and gain access to new features right away. When downgrading, the change takes effect at the end of your current billing cycle, and you'll receive a prorated credit towards your next invoice. There are no penalties for changing plans."
        },
        {
          q: "What is your refund policy?",
          a: "We offer a 30-day money-back guarantee for all new subscriptions. If you're not satisfied with our service within the first 30 days, contact our support team for a full refund, no questions asked. For subscription renewals, refunds are provided on a prorated basis if you cancel within 7 days of renewal. Enterprise customers may have custom refund terms outlined in their service agreement."
        },
        {
          q: "How can I delete my account?",
          a: "You can delete your account from the 'Account Settings' page under the 'Danger Zone' section. Before deleting, we recommend downloading your data as this action is permanent and irreversible. All your data, including tasks, documents, and settings, will be permanently removed within 30 days. During this 30-day grace period, you can contact support to restore your account if you change your mind."
        }
      ]
    },
    {
      category: "Security & Privacy",
      icon: Shield,
      questions: [
        {
          q: "Is my data secure?",
          a: "Absolutely. We employ bank-level security measures to protect your data. All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. We undergo regular third-party security audits and maintain SOC 2 Type II compliance. Our infrastructure is hosted on secure cloud servers with 99.9% uptime SLA. We also implement strict access controls and monitor our systems 24/7 for any suspicious activity. Learn more on our Security page."
        },
        {
          q: "Do you share my data with third parties?",
          a: "No, we never sell or share your personal data with third parties for marketing purposes. We only share data with service providers who help us operate our platform (such as cloud hosting and payment processors), and they are bound by strict confidentiality agreements. You maintain full ownership of your data at all times. We are fully GDPR compliant and respect your data privacy rights."
        },
        {
          q: "How do I enable two-factor authentication?",
          a: "Two-factor authentication (2FA) adds an extra layer of security to your account. To enable it, go to 'Account Settings' > 'Security' and click 'Enable 2FA'. You can choose between authenticator apps (like Google Authenticator or Authy) or SMS-based codes. We strongly recommend using an authenticator app for better security. Once enabled, you'll need both your password and a time-based code to log in."
        },
        {
          q: "What happens if I suspect unauthorized access?",
          a: "If you notice any suspicious activity on your account, immediately change your password and enable 2FA. You can review all recent login activity in your security settings, including device types, locations, and timestamps. If you see unfamiliar access, click 'Log out all devices' to end all active sessions. Contact our security team immediately at security@taskapp.com, and we'll help investigate and secure your account."
        }
      ]
    },
    {
      category: "Features & Usage",
      icon: Zap,
      questions: [
        {
          q: "How do I share tasks with team members?",
          a: "Collaboration is easy with our sharing features. Open any task and click the 'Share' button. You can invite team members by email or share a link. Set permissions for each collaborator (view, edit, or admin). Collaborators receive real-time updates and can comment, attach files, and update task status. You can also create team workspaces where multiple tasks and projects are automatically shared with all members."
        },
        {
          q: "Can I integrate with other tools?",
          a: "Yes! We offer integrations with over 50 popular tools including Slack, Google Workspace, Microsoft 365, Dropbox, Trello, Asana, and many more. Visit the 'Integrations' page in your settings to browse and connect your tools. Most integrations can be set up in minutes with OAuth authentication. For enterprise customers, we also offer custom API access and webhooks for advanced integrations."
        },
        {
          q: "How do I export my data?",
          a: "You can export your data at any time from the 'Data & Privacy' section in settings. We support multiple export formats including CSV, JSON, and PDF. You can choose to export all data or select specific projects and date ranges. Large exports are processed in the background, and you'll receive an email with a secure download link when ready. Exports remain available for 7 days before being automatically deleted."
        },
        {
          q: "Is there a mobile app?",
          a: "Yes, we have native mobile apps for both iOS and Android devices. Download them from the App Store or Google Play Store. The mobile apps offer full functionality including offline access, push notifications, and file uploads from your camera. Your data syncs automatically across all devices. The apps also support biometric authentication (Face ID, Touch ID, or fingerprint) for quick and secure access."
        },
        {
          q: "What are the storage limits?",
          a: "Storage limits vary by plan. Free accounts receive 2GB of storage, Pro accounts get 100GB, and Business accounts receive 1TB per user. Enterprise plans offer unlimited storage. File attachments are supported up to 100MB per file on paid plans (10MB on free plans). If you need more storage, you can purchase additional capacity in 100GB increments from your billing settings."
        }
      ]
    },
    {
      category: "Troubleshooting",
      icon: Settings,
      questions: [
        {
          q: "Why can't I log in to my account?",
          a: "Login issues are usually caused by incorrect credentials, expired sessions, or browser cache problems. First, ensure you're using the correct email and password. Try resetting your password if you're unsure. Clear your browser cache and cookies, then try again. If you have 2FA enabled, ensure your device time is synchronized correctly. Still having trouble? Contact our support team with your account email, and we'll help you regain access."
        },
        {
          q: "My files aren't uploading. What should I do?",
          a: "File upload issues can stem from several causes. Check that your file size is within limits (100MB for paid plans, 10MB for free). Ensure you have sufficient storage space remaining in your account. Try a different browser or disable browser extensions that might interfere with uploads. Check your internet connection stability. If uploads consistently fail, try compressing your files or breaking large uploads into smaller batches."
        },
        {
          q: "Why are notifications not working?",
          a: "Notification issues are typically related to browser or device permissions. Check that you've allowed notifications in your browser settings for our site. On mobile, verify that push notifications are enabled in your device settings for our app. Review your notification preferences in account settings to ensure you haven't disabled certain types of notifications. If you're using email notifications, check your spam folder and add us to your safe senders list."
        },
        {
          q: "The app is running slowly. How can I fix it?",
          a: "Performance can be affected by several factors. Start by clearing your browser cache or app cache on mobile. Close unnecessary browser tabs or background apps. Check your internet connection speed (we recommend at least 5 Mbps). If you have many tasks or large files, try archiving completed items. Update your browser or mobile app to the latest version. For persistent issues, try accessing the platform from a different device to isolate the problem."
        }
      ]
    }
  ];

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      searchQuery === '' || 
      q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-800/50 shadow-2xl mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-linear-to-br from-blue-500 to-cyan-500 rounded-xl">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Help Center
            </h1>
          </div>
          <p className="text-slate-400 text-lg mt-4 leading-relaxed">
            Welcome to our comprehensive help center. Find answers to common questions, learn how to use our platform effectively, and get the support you need. Our documentation is regularly updated to provide you with the most current information.
          </p>

          {/* Search Bar */}
          <div className="mt-6 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search for help articles, guides, and FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-900/50 backdrop-blur-lg rounded-xl p-6 border border-slate-800/50 hover:border-cyan-500/50 transition-all group cursor-pointer">
            <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-slate-100 mb-2">Documentation</h3>
            <p className="text-slate-400">Comprehensive guides and tutorials</p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-lg rounded-xl p-6 border border-slate-800/50 hover:border-cyan-500/50 transition-all group cursor-pointer">
            <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-slate-100 mb-2">Community</h3>
            <p className="text-slate-400">Connect with other users and experts</p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-lg rounded-xl p-6 border border-slate-800/50 hover:border-cyan-500/50 transition-all group cursor-pointer">
            <div className="w-12 h-12 bg-linear-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-slate-100 mb-2">Video Tutorials</h3>
            <p className="text-slate-400">Learn with step-by-step video guides</p>
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-6">
          {filteredFaqs.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <section key={catIndex} className="bg-slate-900/50 backdrop-blur-lg rounded-2xl border border-slate-800/50 shadow-xl overflow-hidden">
                <div className="p-6 border-b border-slate-800/50 bg-linear-to-r from-slate-800/50 to-transparent">
                  <h2 className="text-2xl font-semibold text-slate-100 flex items-center gap-3">
                    <div className="p-2 bg-linear-to-br from-blue-500 to-cyan-500 rounded-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    {category.category}
                  </h2>
                  <p className="text-slate-400 mt-2">
                    {category.questions.length} {category.questions.length === 1 ? 'question' : 'questions'} available
                  </p>
                </div>
                
                <div className="p-6 space-y-3">
                  {category.questions.map((faq, qIndex) => {
                    const globalIndex = `${catIndex}-${qIndex}`;
                    const isExpanded = expandedFaq === parseInt(globalIndex);
                    
                    return (
                      <div 
                        key={qIndex}
                        className="bg-slate-800/30 rounded-xl border border-slate-800/50 hover:border-cyan-500/30 transition-all overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFaq(parseInt(globalIndex))}
                          className="w-full p-5 flex items-center justify-between text-left hover:bg-slate-800/50 transition-colors"
                        >
                          <h3 className="font-medium text-slate-100 pr-4">{faq.q}</h3>
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-cyan-400 shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                          )}
                        </button>
                        
                        {isExpanded && (
                          <div className="px-5 pb-5 pt-2">
                            <p className="text-slate-300 leading-relaxed">{faq.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}

          {filteredFaqs.length === 0 && searchQuery && (
            <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-12 border border-slate-800/50 text-center">
              <Search className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-slate-300 mb-2">No results found</h3>
              <p className="text-slate-400">Try adjusting your search terms or browse our categories above</p>
            </div>
          )}
        </div>

        {/* Contact Support Section */}
        <section className="bg-linear-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-lg rounded-2xl p-8 border border-slate-800/50 shadow-2xl mt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-linear-to-br from-blue-500 to-cyan-500 rounded-xl">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl font-semibold text-slate-100">Still Need Help?</h2>
          </div>
          
          <p className="text-slate-300 mb-6 leading-relaxed text-lg">
            Can't find what you're looking for? Our dedicated support team is available 24/7 to assist you with any questions or issues. We typically respond within a few hours and are committed to resolving your concerns quickly and efficiently.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-800/40 p-5 rounded-xl border border-slate-700/50">
              <h3 className="font-semibold text-slate-100 mb-2 flex items-center gap-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                Email Support
              </h3>
              <p className="text-slate-400 text-sm mb-3">Get detailed help via email</p>
              <p className="text-slate-300 text-sm">Response time: Within 4 hours</p>
            </div>
            
            <div className="bg-slate-800/40 p-5 rounded-xl border border-slate-700/50">
              <h3 className="font-semibold text-slate-100 mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                Live Chat
              </h3>
              <p className="text-slate-400 text-sm mb-3">Get instant answers to quick questions</p>
              <p className="text-slate-300 text-sm">Available: 24/7</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="mailto:support@taskapp.com" 
              className="flex-1 px-6 py-4 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-xl hover:opacity-90 transition-all text-center shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-0.5"
            >
              Email Support Team
            </a>
            <a 
              href="#" 
              className="flex-1 px-6 py-4 border-2 border-slate-700 text-slate-300 font-medium rounded-xl hover:bg-slate-800/50 hover:border-cyan-500/50 transition-all text-center transform hover:-translate-y-0.5"
            >
              Start Live Chat
            </a>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-700/50">
            <p className="text-sm text-slate-400 text-center">
              <strong className="text-slate-300">Business hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM EST<br/>
              <strong className="text-slate-300">After hours:</strong> Emergency support available for critical issues
            </p>
          </div>
        </section>

        {/* Additional Resources */}
        <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-800/50 mt-8">
          <h2 className="text-2xl font-semibold text-slate-100 mb-6">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="#" className="p-4 bg-slate-800/30 rounded-xl border border-slate-800/50 hover:border-cyan-500/50 transition-all group">
              <h3 className="font-semibold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">API Documentation</h3>
              <p className="text-slate-400 text-sm">Technical documentation for developers</p>
            </a>
            <a href="#" className="p-4 bg-slate-800/30 rounded-xl border border-slate-800/50 hover:border-cyan-500/50 transition-all group">
              <h3 className="font-semibold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">System Status</h3>
              <p className="text-slate-400 text-sm">Check our platform's current status</p>
            </a>
            <a href="#" className="p-4 bg-slate-800/30 rounded-xl border border-slate-800/50 hover:border-cyan-500/50 transition-all group">
              <h3 className="font-semibold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">Release Notes</h3>
              <p className="text-slate-400 text-sm">Stay updated with latest features</p>
            </a>
            <a href="#" className="p-4 bg-slate-800/30 rounded-xl border border-slate-800/50 hover:border-cyan-500/50 transition-all group">
              <h3 className="font-semibold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">Keyboard Shortcuts</h3>
              <p className="text-slate-400 text-sm">Work faster with keyboard commands</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
