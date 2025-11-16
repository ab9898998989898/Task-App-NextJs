'use client';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  HelpCircle, 
  Users, 
  MessageSquare, 
  Twitter, 
  Linkedin, 
  Github,
  BookOpen
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// More descriptive contact cards
const contactMethods = [
  {
    icon: Mail,
    title: 'General Inquiries',
    description: 'For all general questions, feedback, and non-support related matters. We\'d love to hear from you.',
    contact: 'hello@taskflow.com',
    type: 'email',
  },
  {
    icon: HelpCircle,
    title: 'Customer Support',
    description: 'Need help with our app or have a technical question? Our support team is here to help you out.',
    contact: 'support@taskflow.com',
    type: 'email',
  },
  {
    icon: Users,
    title: 'Sales & Demos',
    description: 'Interested in our Enterprise plan or want a custom demo for your team? Get in touch with our sales team.',
    contact: 'sales@taskflow.com',
    type: 'email',
  },
  {
    icon: MessageSquare,
    title: 'Press & Media',
    description: 'For all press inquiries, interviews, and media-related questions, please contact our PR team.',
    contact: 'press@taskflow.com',
    type: 'email',
  },
];

// Social Media Links
const socialLinks = [
  {
    icon: Twitter,
    name: 'Twitter',
    href: '#',
    description: 'Follow us for real-time updates and news.',
  },
  {
    icon: Linkedin,
    name: 'LinkedIn',
    href: '#',
    description: 'Connect with us for company insights and career opportunities.',
  },
  {
    icon: Github,
    name: 'GitHub',
    href: '#',
    description: 'See our open-source projects and contributions.',
  },
];

// FAQs
const faqs = [
  {
    question: "What is your support team's response time?",
    answer: "Our support team strives to respond to all inquiries within 24 business hours. For Enterprise customers, we offer 2-hour priority support during business hours.",
  },
  {
    question: "How do I report a bug or request a feature?",
    answer: "We love hearing from our users! Please send any bug reports or feature requests directly to our support team at support@taskflow.com or visit our community feedback board.",
  },
  {
    question: "Do you offer partnership opportunities?",
    answer: "Yes, we are always open to exploring partnership opportunities. Please reach out to our general inquiries email with your proposal, and it will be routed to the correct team.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 py-16 text-slate-300">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
          Get in Touch
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          We're here to help and answer any question you might have. We look forward to hearing from you. Below you'll find the best ways to reach us for your specific needs.
        </p>
      </motion.div>

      {/* Contact Methods */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <motion.div 
                key={method.title}
                variants={fadeInUp}
                className="bg-slate-900/50 backdrop-blur-lg p-8 rounded-2xl border border-slate-800/50 hover:border-cyan-500/30 transition-colors"
              >
                <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-100 mb-3">{method.title}</h3>
                <p className="text-slate-400 mb-4">{method.description}</p>
                <a 
                  href={method.type === 'email' ? `mailto:${method.contact}` : '#'} 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium text-lg inline-flex items-center"
                >
                  {method.contact}
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Social Media Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-100 mb-4">Follow Us</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Stay connected with us on social media for the latest news, updates, and productivity tips.
          </p>
        </motion.div>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <motion.a 
                key={social.name}
                variants={fadeInUp}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-slate-900/50 backdrop-blur-lg p-6 rounded-2xl border border-slate-800/50 hover:border-cyan-500/30 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-100">{social.name}</h3>
                    <p className="text-slate-400 text-sm">{social.description}</p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-slate-900/50 rounded-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-100 mb-4">Common Questions</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Have a question? You might find the answer here before you even have to ask.
          </p>
        </motion.div>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-8"
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="bg-slate-900/50 p-6 rounded-lg border border-slate-800/50"
            >
              <h3 className="text-lg font-semibold text-slate-100 mb-3">{faq.question}</h3>
              <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}