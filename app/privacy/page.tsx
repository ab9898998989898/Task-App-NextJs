import { Shield, Eye, Lock, Users, Database, Bell, FileText, Download, UserCheck, Globe, Server, Trash2, AlertCircle, CheckCircle, Mail } from 'lucide-react';

export default function PrivacyPage() {
  const lastUpdated = new Date('2025-01-15');
  const effectiveDate = new Date('2025-02-01');

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-800/50 shadow-2xl mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-linear-to-br from-blue-500 to-cyan-500 rounded-xl">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-bold bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-slate-400 mt-2">Your privacy is our priority</p>
            </div>
          </div>
          
          <div className="bg-slate-800/40 rounded-xl p-6 border border-slate-700/50 mt-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
              <div>
                <p className="text-slate-300 leading-relaxed mb-3">
                  At TaskApp, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our services.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="text-slate-400">
                    <span className="text-slate-300 font-medium">Last Updated:</span> {lastUpdated.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                  <div className="text-slate-400">
                    <span className="text-slate-300 font-medium">Effective Date:</span> {effectiveDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-900/50 backdrop-blur-lg rounded-xl p-6 border border-slate-800/50">
            <div className="w-12 h-12 bg-linear-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-slate-100 mb-2">No Data Selling</h3>
            <p className="text-slate-400 text-sm">We never sell your personal data to third parties</p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-lg rounded-xl p-6 border border-slate-800/50">
            <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-slate-100 mb-2">Encrypted Storage</h3>
            <p className="text-slate-400 text-sm">All data is encrypted using industry-standard protocols</p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-lg rounded-xl p-6 border border-slate-800/50">
            <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
              <UserCheck className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-slate-100 mb-2">Full Control</h3>
            <p className="text-slate-400 text-sm">Access, modify, or delete your data at any time</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Section 1 */}
          <section className="bg-slate-900/50 backdrop-blur-lg rounded-2xl border border-slate-800/50 overflow-hidden shadow-xl">
            <div className="p-6 border-b border-slate-800/50 bg-linear-to-r from-slate-800/50 to-transparent">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-linear-to-br from-blue-500 to-cyan-500 rounded-lg">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-100">1. Information We Collect</h2>
              </div>
            </div>
            
            <div className="p-6 space-y-6 text-slate-300">
              <div>
                <h3 className="text-xl font-semibold text-slate-100 mb-3 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-cyan-400" />
                  1.1 Information You Provide
                </h3>
                <p className="mb-4 leading-relaxed">
                  We collect information that you voluntarily provide to us when you register for an account, use our services, or communicate with us. This includes:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span><strong className="text-slate-200">Account Information:</strong> Name, email address, username, password, and profile picture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span><strong className="text-slate-200">Profile Data:</strong> Job title, company name, bio, and other optional profile details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span><strong className="text-slate-200">Content:</strong> Tasks, projects, notes, comments, file attachments, and any other content you create or upload</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span><strong className="text-slate-200">Communication Data:</strong> Messages, emails, and feedback you send to us or through our platform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span><strong className="text-slate-200">Payment Information:</strong> Billing address and payment method details (processed securely through third-party payment processors)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-100 mb-3 flex items-center gap-2">
                  <Server className="w-5 h-5 text-cyan-400" />
                  1.2 Information Collected Automatically
                </h3>
                <p className="mb-4 leading-relaxed">
                  When you access our services, we automatically collect certain information about your device and usage:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span><strong className="text-slate-200">Device Information:</strong> IP address, browser type, operating system, device identifiers, and mobile network information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span><strong className="text-slate-200">Usage Data:</strong> Pages visited, features used, time spent, click patterns, and interaction with content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span><strong className="text-slate-200">Location Data:</strong> Approximate geographic location based on IP address (with your consent for precise location)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span><strong className="text-slate-200">Cookies and Tracking:</strong> Session cookies, preference cookies, and analytics cookies to improve your experience</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-100 mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-cyan-400" />
                  1.3 Information from Third Parties
                </h3>
                <p className="mb-4 leading-relaxed">
                  We may receive information about you from third-party services when you connect or integrate them with our platform, such as Google Workspace, Microsoft 365, or social media accounts. This information is used solely to provide the integration functionality you have requested.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-slate-900/50 backdrop-blur-lg rounded-2xl border border-slate-800/50 overflow-hidden shadow-xl">
            <div className="p-6 border-b border-slate-800/50 bg-linear-to-r from-slate-800/50 to-transparent">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-linear-to-br from-purple-500 to-pink-500 rounded-lg">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-100">2. How We Use Your Information</h2>
              </div>
            </div>
            
            <div className="p-6 space-y-6 text-slate-300">
              <p className="leading-relaxed">
                We use the information we collect for various purposes to provide, maintain, and improve our services. Your data helps us deliver a personalized and secure experience.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-700/50">
                  <h3 className="font-semibold text-slate-100 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Service Delivery
                  </h3>
                  <ul className="space-y-1 text-sm text-slate-400">
                    <li>• Create and manage your account</li>
                    <li>• Process your transactions</li>
                    <li>• Provide customer support</li>
                    <li>• Enable collaboration features</li>
                  </ul>
                </div>

                <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-700/50">
                  <h3 className="font-semibold text-slate-100 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Personalization
                  </h3>
                  <ul className="space-y-1 text-sm text-slate-400">
                    <li>• Customize your experience</li>
                    <li>• Recommend relevant features</li>
                    <li>• Remember your preferences</li>
                    <li>• Provide relevant content</li>
                  </ul>
                </div>

                <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-700/50">
                  <h3 className="font-semibold text-slate-100 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Communication
                  </h3>
                  <ul className="space-y-1 text-sm text-slate-400">
                    <li>• Send service updates</li>
                    <li>• Respond to your inquiries</li>
                    <li>• Send important notifications</li>
                    <li>• Provide marketing (with consent)</li>
                  </ul>
                </div>

                <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-700/50">
                  <h3 className="font-semibold text-slate-100 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Security & Compliance
                  </h3>
                  <ul className="space-y-1 text-sm text-slate-400">
                    <li>• Prevent fraud and abuse</li>
                    <li>• Monitor security threats</li>
                    <li>• Comply with legal obligations</li>
                    <li>• Enforce our terms of service</li>
                  </ul>
                </div>

                <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-700/50">
                  <h3 className="font-semibold text-slate-100 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Analytics & Improvement
                  </h3>
                  <ul className="space-y-1 text-sm text-slate-400">
                    <li>• Analyze usage patterns</li>
                    <li>• Develop new features</li>
                    <li>• Improve performance</li>
                    <li>• Fix bugs and issues</li>
                  </ul>
                </div>

                <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-700/50">
                  <h3 className="font-semibold text-slate-100 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Research & Development
                  </h3>
                  <ul className="space-y-1 text-sm text-slate-400">
                    <li>• Test new features</li>
                    <li>• Conduct user research</li>
                    <li>• Improve algorithms</li>
                    <li>• Enhance user experience</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-5">
                <p className="text-slate-300 text-sm leading-relaxed">
                  <strong className="text-blue-400">Legal Basis:</strong> We process your data based on your consent, contract performance, legal obligations, and our legitimate interests in providing and improving our services. You can withdraw consent at any time through your account settings.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-slate-900/50 backdrop-blur-lg rounded-2xl border border-slate-800/50 overflow-hidden shadow-xl">
            <div className="p-6 border-b border-slate-800/50 bg-linear-to-r from-slate-800/50 to-transparent">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-linear-to-br from-green-500 to-emerald-500 rounded-lg">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-100">3. Data Security & Protection</h2>
              </div>
            </div>
            
            <div className="p-6 space-y-6 text-slate-300">
              <p className="leading-relaxed">
                We take data security seriously and implement comprehensive measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
              </p>

              <div className="space-y-4">
                <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-700/50">
                  <h3 className="font-semibold text-slate-100 mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-cyan-400" />
                    Technical Safeguards
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <span><strong>AES-256 Encryption:</strong> All data encrypted at rest and in transit using TLS 1.3</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <span><strong>Secure Architecture:</strong> Multi-layered security with firewalls and intrusion detection</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <span><strong>Regular Backups:</strong> Automated encrypted backups with redundancy</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <span><strong>DDoS Protection:</strong> Advanced protection against distributed attacks</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-700/50">
                  <h3 className="font-semibold text-slate-100 mb-3 flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-cyan-400" />
                    Access Controls
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <span><strong>Two-Factor Authentication:</strong> Optional 2FA for enhanced account security</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <span><strong>Role-Based Access:</strong> Granular permissions and access controls</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <span><strong>Session Management:</strong> Automatic timeout and secure session handling</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <span><strong>Employee Access:</strong> Strict least-privilege access for staff members</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-700/50">
                  <h3 className="font-semibold text-slate-100 mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-cyan-400" />
                    Monitoring & Compliance
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <span><strong>24/7 Monitoring:</strong> Continuous security monitoring and threat detection</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <span><strong>Security Audits:</strong> Regular third-party security assessments</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <span><strong>SOC 2 Type II:</strong> Certified compliance with security standards</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <span><strong>GDPR Compliant:</strong> Full compliance with data protection regulations</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-slate-300 text-sm leading-relaxed">
                    <strong className="text-amber-400">Important:</strong> While we implement robust security measures, no method of transmission over the internet is 100% secure. We recommend using strong passwords, enabling 2FA, and being cautious about sharing sensitive information.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-slate-900/50 backdrop-blur-lg rounded-2xl border border-slate-800/50 overflow-hidden shadow-xl">
            <div className="p-6 border-b border-slate-800/50 bg-linear-to-r from-slate-800/50 to-transparent">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-linear-to-br from-orange-500 to-red-500 rounded-lg">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-100">4. Data Sharing & Disclosure</h2>
              </div>
            </div>
            
            <div className="p-6 space-y-6 text-slate-300">
              <p className="leading-relaxed">
                We do not sell your personal information to third parties. We only share your data in the limited circumstances described below, and we ensure that any third parties we work with maintain appropriate data protection standards.
              </p>

              <div className="space-y-4">
                <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-700/50">
                  <h3 className="font-semibold text-slate-100 mb-2">Service Providers</h3>
                  <p className="text-sm text-slate-400">
                    We share data with trusted third-party service providers who help us operate our platform, such as cloud hosting providers, payment processors, email service providers, and analytics tools. These providers are contractually obligated to protect your data and use it only for specified purposes.
                  </p>
                </div>

                <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-700/50">
                  <h3 className="font-semibold text-slate-100 mb-2">Team Collaboration</h3>
                  <p className="text-sm text-slate-400">
                    When you share tasks, projects, or workspaces with team members, the information you choose to share becomes visible to those collaborators. You control what you share and with whom.
                  </p>
                </div>

                <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-700/50">
                  <h3 className="font-semibold text-slate-100 mb-2">Legal Requirements</h3>
                  <p className="text-sm text-slate-400">
                    We may disclose your information if required by law, court order, or government regulation, or if we believe disclosure is necessary to protect our rights, your safety, or the safety of others, investigate fraud, or comply with legal processes.
                  </p>
                </div>

                <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-700/50">
                  <h3 className="font-semibold text-slate-100 mb-2">Business Transfers</h3>
                  <p className="text-sm text-slate-400">
                    If we are involved in a merger, acquisition, or sale of assets, your information may be transferred. We will notify you before your personal information becomes subject to a different privacy policy.
                  </p>
                </div>

                <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-700/50">
                  <h3 className="font-semibold text-slate-100 mb-2">Aggregated Data</h3>
                  <p className="text-sm text-slate-400">
                    We may share aggregated, anonymized data that cannot identify you individually for research, marketing, or analytics purposes. This data does not contain any personally identifiable information.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="bg-slate-900/50 backdrop-blur-lg rounded-2xl border border-slate-800/50 overflow-hidden shadow-xl">
            <div className="p-6 border-b border-slate-800/50 bg-linear-to-r from-slate-800/50 to-transparent">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-linear-to-br from-cyan-500 to-blue-500 rounded-lg">
                  <UserCheck className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-100">5. Your Privacy Rights</h2>
              </div>
            </div>
            
            <div className="p-6 space-y-6 text-slate-300">
              <p className="leading-relaxed">
                You have full control over your personal information. We provide you with comprehensive tools and rights to manage your data in accordance with global privacy regulations including GDPR, CCPA, and other applicable laws.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-linear-to-br from-slate-800/50 to-slate-800/30 p-5 rounded-xl border border-slate-700/50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                      <Eye className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h3 className="font-semibold text-slate-100">Access Your Data</h3>
                  </div>
                  <p className="text-sm text-slate-400">
                    Request a copy of all personal information we hold about you. We will provide it in a structured, commonly used format within 30 days.
                  </p>
                </div>

                <div className="bg-linear-to-br from-slate-800/50 to-slate-800/30 p-5 rounded-xl border border-slate-700/50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="font-semibold text-slate-100">Rectify Data</h3>
                  </div>
                  <p className="text-sm text-slate-400">
                    Correct any inaccurate or incomplete personal information directly through your account settings or by contacting support.
                  </p>
                </div>

                <div className="bg-linear-to-br from-slate-800/50 to-slate-800/30 p-5 rounded-xl border border-slate-700/50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <Trash2 className="w-5 h-5 text-red-400" />
                    </div>
                    <h3 className="font-semibold text-slate-100">Delete Data</h3>
                  </div>
                  <p className="text-sm text-slate-400">
                    Request deletion of your personal information. We will remove your data within 30 days, except where retention is required by law.
                  </p>
                </div>

                <div className="bg-linear-to-br from-slate-800/50 to-slate-800/30 p-5 rounded-xl border border-slate-700/50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <Download className="w-5 h-5 text-purple-400" />
                    </div>
                    <h3 className="font-semibold text-slate-100">Data Portability</h3>
                  </div>
                  <p className="text-sm text-slate-400">
                    Export your data in machine-readable formats (CSV, JSON) to transfer it to another service provider if desired.
                  </p>
                </div>

                <div className="bg-linear-to-br from-slate-800/50 to-slate-800/30 p-5 rounded-xl border border-slate-700/50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <Bell className="w-5 h-5 text-orange-400" />
                    </div>
                    <h3 className="font-semibold text-slate-100">Opt-Out</h3>
                  </div>
                  <p className="text-sm text-slate-400">
                    Unsubscribe from marketing communications at any time. You will still receive essential service-related notifications.
                  </p>
                </div>

                <div className="bg-linear-to-br from-slate-800/50 to-slate-800/30 p-5 rounded-xl border border-slate-700/50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Lock className="w-5 h-5 text-green-400" />
                    </div>
                    <h3 className="font-semibold text-slate-100">Restrict Processing</h3>
                  </div>
                  <p className="text-sm text-slate-400">
                    Request that we limit how we process your personal information in certain circumstances while maintaining your account.
                  </p>
                </div>

                <div className="bg-linear-to-br from-slate-800/50 to-slate-800/30 p-5 rounded-xl border border-slate-700/50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-pink-400" />
                    </div>
                    <h3 className="font-semibold text-slate-100">Object to Processing</h3>
                  </div>
                  <p className="text-sm text-slate-400">
                    Object to processing based on legitimate interests or for direct marketing purposes at any time.
                  </p>
                </div>

                <div className="bg-linear-to-br from-slate-800/50 to-slate-800/30 p-5 rounded-xl border border-slate-700/50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                      <AlertCircle className="w-5 h-5 text-yellow-400" />
                    </div>
                    <h3 className="font-semibold text-slate-100">Withdraw Consent</h3>
                  </div>
                  <p className="text-sm text-slate-400">
                    Withdraw your consent for data processing at any time without affecting the lawfulness of prior processing.
                  </p>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-5">
                <h3 className="font-semibold text-slate-100 mb-3">How to Exercise Your Rights</h3>
                <p className="text-sm text-slate-300 mb-3">
                  To exercise any of these rights, you can:
                </p>
                <ul className="space-y-2 text-sm text-slate-400 ml-4">
                  <li>• Access your account settings and privacy controls</li>
                  <li>• Email us at <a href="mailto:privacy@taskapp.com" className="text-cyan-400 hover:underline">privacy@taskapp.com</a></li>
                  <li>• Contact our Data Protection Officer through the support portal</li>
                  <li>• Submit a request through our online privacy request form</li>
                </ul>
                <p className="text-sm text-slate-400 mt-3">
                  We will respond to all requests within 30 days. If you are not satisfied with our response, you have the right to lodge a complaint with your local data protection authority.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="bg-slate-900/50 backdrop-blur-lg rounded-2xl border border-slate-800/50 overflow-hidden shadow-xl">
            <div className="p-6 border-b border-slate-800/50 bg-linear-to-r from-slate-800/50 to-transparent">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-linear-to-br from-indigo-500 to-purple-500 rounded-lg">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-100">6. Data Retention</h2>
              </div>
            </div>
            
            <div className="p-6 space-y-6 text-slate-300">
              <p className="leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>

              <div className="space-y-4">
                <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-700/50">
                  <h3 className="font-semibold text-slate-100 mb-3">Retention Periods</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-start">
                      <span className="text-slate-300"><strong>Active Account Data:</strong></span>
                      <span className="text-slate-400">Duration of account + 30 days</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-slate-300"><strong>Deleted Account Data:</strong></span>
                      <span className="text-slate-400">30-day grace period, then permanently deleted</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-slate-300"><strong>Billing Records:</strong></span>
                      <span className="text-slate-400">7 years (legal requirement)</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-slate-300"><strong>Support Tickets:</strong></span>
                      <span className="text-slate-400">3 years after resolution</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-slate-300"><strong>Marketing Data:</strong></span>
                      <span className="text-slate-400">Until opt-out or 2 years of inactivity</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-slate-300"><strong>Analytics Data:</strong></span>
                      <span className="text-slate-400">Aggregated data retained indefinitely</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-700/50">
                  <h3 className="font-semibold text-slate-100 mb-2">Backup and Recovery</h3>
                  <p className="text-sm text-slate-400">
                    We maintain encrypted backups of your data for disaster recovery purposes. Even after you delete your account, copies may persist in our backup systems for up to 90 days before being permanently removed. These backups are isolated and cannot be accessed for regular operations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section className="bg-slate-900/50 backdrop-blur-lg rounded-2xl border border-slate-800/50 overflow-hidden shadow-xl">
            <div className="p-6 border-b border-slate-800/50 bg-linear-to-r from-slate-800/50 to-transparent">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-linear-to-br from-pink-500 to-rose-500 rounded-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-100">7. Children's Privacy</h2>
              </div>
            </div>
            
            <div className="p-6 space-y-4 text-slate-300">
              <p className="leading-relaxed">
                Our services are not intended for children under the age of 13 (or 16 in the European Economic Area). We do not knowingly collect personal information from children under these ages.
              </p>
              <p className="leading-relaxed">
                If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately at <a href="mailto:privacy@taskapp.com" className="text-cyan-400 hover:underline">privacy@taskapp.com</a>. We will take steps to delete such information from our systems promptly.
              </p>
              <p className="leading-relaxed">
                For educational institutions using our platform for students, special provisions and parental consent mechanisms are in place as required by applicable laws such as COPPA and FERPA.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="bg-slate-900/50 backdrop-blur-lg rounded-2xl border border-slate-800/50 overflow-hidden shadow-xl">
            <div className="p-6 border-b border-slate-800/50 bg-linear-to-r from-slate-800/50 to-transparent">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-linear-to-br from-teal-500 to-cyan-500 rounded-lg">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-100">8. International Data Transfers</h2>
              </div>
            </div>
            
            <div className="p-6 space-y-4 text-slate-300">
              <p className="leading-relaxed">
                Your information may be transferred to, stored, and processed in countries other than your own, including the United States and other jurisdictions where our service providers operate. These countries may have data protection laws that differ from those in your country.
              </p>
              <p className="leading-relaxed">
                When we transfer personal data outside the European Economic Area (EEA), we ensure appropriate safeguards are in place, including:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                  <span><strong>Standard Contractual Clauses (SCCs):</strong> We use EU-approved SCCs with all third-party processors</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                  <span><strong>Adequacy Decisions:</strong> We transfer data to countries recognized by the EU as providing adequate protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                  <span><strong>Data Processing Agreements:</strong> Binding agreements that ensure data protection standards are maintained</span>
                </li>
              </ul>
              <p className="leading-relaxed">
                By using our services, you acknowledge and consent to the transfer of your information to these jurisdictions.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="bg-slate-900/50 backdrop-blur-lg rounded-2xl border border-slate-800/50 overflow-hidden shadow-xl">
            <div className="p-6 border-b border-slate-800/50 bg-linear-to-r from-slate-800/50 to-transparent">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-linear-to-br from-amber-500 to-orange-500 rounded-lg">
                  <Bell className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-100">9. Changes to This Privacy Policy</h2>
              </div>
            </div>
            
            <div className="p-6 space-y-4 text-slate-300">
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will notify you through one or more of the following methods:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Email notification to the address associated with your account</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Prominent notice on our website or within the application</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>In-app notification when you next log in</span>
                </li>
              </ul>
              <p className="leading-relaxed">
                Your continued use of our services after the effective date of the updated Privacy Policy constitutes your acceptance of the changes. If you do not agree with the updated policy, you should discontinue using our services and may request deletion of your account.
              </p>
              <p className="leading-relaxed">
                We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information. Previous versions of this policy are available upon request.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section className="bg-slate-900/50 backdrop-blur-lg rounded-2xl border border-slate-800/50 overflow-hidden shadow-xl">
            <div className="p-6 border-b border-slate-800/50 bg-linear-to-r from-slate-800/50 to-transparent">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-linear-to-br from-violet-500 to-purple-500 rounded-lg">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-100">10. Cookies & Tracking Technologies</h2>
              </div>
            </div>
            
            <div className="p-6 space-y-6 text-slate-300">
              <p className="leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and improve our services. You have control over these technologies through your browser and account settings.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-700/50">
                  <h3 className="font-semibold text-slate-100 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Essential Cookies
                  </h3>
                  <p className="text-sm text-slate-400 mb-2">Required for basic functionality</p>
                  <p className="text-xs text-slate-500">Authentication, security, session management</p>
                </div>

                <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-700/50">
                  <h3 className="font-semibold text-slate-100 mb-2 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-blue-400" />
                    Analytics Cookies
                  </h3>
                  <p className="text-sm text-slate-400 mb-2">Help us understand usage patterns</p>
                  <p className="text-xs text-slate-500">Page views, feature usage, performance metrics</p>
                </div>

                <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-700/50">
                  <h3 className="font-semibold text-slate-100 mb-2 flex items-center gap-2">
                    <Users className="w-5 h-5 text-purple-400" />
                    Preference Cookies
                  </h3>
                  <p className="text-sm text-slate-400 mb-2">Remember your settings</p>
                  <p className="text-xs text-slate-500">Language, theme, display preferences</p>
                </div>

                <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-700/50">
                  <h3 className="font-semibold text-slate-100 mb-2 flex items-center gap-2">
                    <Bell className="w-5 h-5 text-orange-400" />
                    Marketing Cookies
                  </h3>
                  <p className="text-sm text-slate-400 mb-2">Personalize advertising (optional)</p>
                  <p className="text-xs text-slate-500">Ad targeting, campaign tracking</p>
                </div>
              </div>

              <div className="bg-slate-800/30 p-5 rounded-xl border border-slate-700/50">
                <h3 className="font-semibold text-slate-100 mb-3">Managing Cookies</h3>
                <p className="text-sm text-slate-400 mb-3">
                  You can control cookies through your browser settings or our cookie preference center. Note that disabling certain cookies may affect functionality.
                </p>
                <button className="px-4 py-2 bg-linear-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
                  Manage Cookie Preferences
                </button>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-linear-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-lg rounded-2xl p-8 border border-slate-800/50 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-linear-to-br from-blue-500 to-cyan-500 rounded-xl">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-semibold text-slate-100">Contact Us</h2>
            </div>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please do not hesitate to reach out to us:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50">
                <h3 className="font-semibold text-slate-100 mb-4">General Inquiries</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-slate-300 font-medium">Email</p>
                      <a href="mailto:privacy@taskapp.com" className="text-cyan-400 hover:underline">privacy@taskapp.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-slate-300 font-medium">Website</p>
                      <a href="https://taskapp.com/privacy" className="text-cyan-400 hover:underline">taskapp.com/privacy</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50">
                <h3 className="font-semibold text-slate-100 mb-4">Data Protection Officer</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-slate-300 font-medium">Email</p>
                      <a href="mailto:dpo@taskapp.com" className="text-cyan-400 hover:underline">dpo@taskapp.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-slate-300 font-medium">Mailing Address</p>
                      <p className="text-slate-400">TaskApp Inc.<br/>123 Privacy Lane<br/>San Francisco, CA 94102<br/>United States</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-700/50">
              <p className="text-sm text-slate-400 text-center">
                We are committed to resolving privacy concerns promptly. You can expect a response within 48 hours for general inquiries and within 30 days for formal data rights requests.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
