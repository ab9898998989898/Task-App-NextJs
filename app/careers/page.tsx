'use client';
import { motion } from 'framer-motion';
import React, { useState, useMemo } from 'react';
// Expanded lucide-react imports
import { 
  Briefcase, 
  Clock, 
  DollarSign, 
  Heart, 
  Zap, 
  Users, 
  MapPin,
  Brain, // New
  Gift, // New
  Rocket, // New
  BarChart3, // New
  Search, // New
  MessageCircle, // New
  TrendingUp, // New
  Award // New
} from 'lucide-react';

// Expanded positions list with descriptions
const positions = [
  {
    id: 1,
    title: 'Frontend Developer (Senior)',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
    description: 'Lead the development of our user-facing features using React, TypeScript, and Tailwind CSS. Mentor junior developers and drive architectural decisions.'
  },
  {
    id: 2,
    title: 'UX/UI Designer',
    type: 'Full-time',
    location: 'San Francisco, CA',
    department: 'Design',
    description: 'Design intuitive, beautiful, and user-centric interfaces for our web and mobile apps. Own the design system.'
  },
  {
    id: 3,
    title: 'Product Manager, AI',
    type: 'Full-time',
    location: 'New York, NY',
    department: 'Product',
    description: 'Own the product roadmap for our new AI-powered features, from ideation and user research to launch and iteration.'
  },
  {
    id: 4,
    title: 'Backend Engineer (Go)',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
    description: 'Develop and scale our Go-based microservices and manage our cloud infrastructure on AWS. Ensure high availability and low latency.'
  },
  {
    id: 5,
    title: 'Content Marketing Manager',
    type: 'Full-time',
    location: 'Remote',
    department: 'Marketing',
    description: 'Create and execute a content strategy (blog, social, video) that drives organic growth, user engagement, and positions TaskFlow as a thought leader.'
  },
  {
    id: 6,
    title: 'DevOps Engineer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
    description: 'Automate our infrastructure, manage CI/CD pipelines, and ensure 99.99% uptime for all TaskFlow services.'
  },
  {
    id: 7,
    title: 'Customer Success Manager',
    type: 'Full-time',
    location: 'Remote',
    department: 'Success',
    description: 'Be the primary advocate for our enterprise customers, ensuring they achieve their goals and see maximum value from TaskFlow.'
  }
];

// Expanded benefits list with descriptions
const benefits = [
  { 
    icon: <DollarSign className="w-6 h-6 text-cyan-400" />, 
    title: 'Competitive Salary & Equity',
    description: 'We offer top-of-market compensation and meaningful stock options. We want you to share in the success you help create.' 
  },
  { 
    icon: <Clock className="w-6 h-6 text-cyan-400" />, 
    title: 'Flexible & Async Work',
    description: 'Work on a schedule that fits your life. We are remote-first and trust you to manage your time and deliver great work.' 
  },
  { 
    icon: <Heart className="w-6 h-6 text-cyan-400" />, 
    title: 'Comprehensive Health',
    description: '100% medical, dental, and vision coverage for you and your dependents. Your well-being is our top priority.' 
  },
  { 
    icon: <Zap className="w-6 h-6 text-cyan-400" />, 
    title: '$1,500 Learning Budget',
    description: 'An annual budget for courses, books, conferences, and any tool that helps you learn and grow in your craft.' 
  },
  { 
    icon: <Brain className="w-6 h-6 text-cyan-400" />, 
    title: 'Mental Health Support',
    description: 'Free access to mental health apps and services, plus dedicated "recharge" days off each quarter to prevent burnout.' 
  },
  { 
    icon: <Briefcase className="w-6 h-6 text-cyan-400" />, 
    title: '$1,000 Home Office Stipend',
    description: 'A one-time stipend to set up your dream home office with the chair, desk, and tech you need to be comfortable.' 
  },
  { 
    icon: <Gift className="w-6 h-6 text-cyan-400" />, 
    title: 'Annual Company Retreats',
    description: 'We fly the entire company to an amazing destination for a week of team building, planning, and fun. (Post-pandemic, of course!)'
  },
  { 
    icon: <Users className="w-6 h-6 text-cyan-400" />, 
    title: 'Generous Parental Leave',
    description: 'Take the time you need to be with your new family. We offer 16 weeks of paid leave for all new parents.'
  },
];

// NEW: Culture Highlights
const cultureHighlights = [
  { 
    icon: <Rocket className="w-10 h-10 text-blue-400" />, 
    title: 'Make a Real Impact', 
    description: 'We\'re a small, agile team. Your work will be seen and used by thousands of users from day one.' 
  },
  { 
    icon: <BarChart3 className="w-10 h-10 text-blue-400" />, 
    title: 'Grow Your Career', 
    description: 'With a generous learning budget and direct mentorship, we are invested in your professional growth.' 
  },
  { 
    icon: <Users className="w-10 h-10 text-blue-400" />, 
    title: 'Collaborate Openly', 
    description: 'We value transparency. The best idea wins, no matter if it comes from an intern or the CEO.' 
  },
];

// NEW: Employee Testimonials
const testimonials = [
  {
    name: 'Jordan Lee',
    role: 'Lead Developer',
    quote: 'The best part about TaskFlow is the autonomy. I have the freedom to solve complex problems with a team that truly trusts me. My work has a direct impact on our users, and I see that every single day.',
    image: 'https://placehold.co/100x100/0f172a/38bdf8?text=JL'
  },
  {
    name: 'Taylor Smith',
    role: 'Lead Designer',
    quote: 'The culture of design-first thinking here is amazing. We\'re not just building features; we\'re obsessed with crafting experiences that feel effortless and joyful. It\'s a designer\'s dream.',
    image: 'https://placehold.co/100x100/0f172a/38bdf8?text=TS'
  },
];

// NEW: Hiring Process
const hiringProcess = [
  { step: 1, title: 'Application', description: 'Submit your resume. Our talent team reviews every single one.' },
  { step: 2, title: 'Initial Chat', description: 'A 30-minute call with a recruiter to learn about your background and goals.' },
  { step: 3, title: 'Hiring Manager Interview', description: 'A 45-minute call to dive deeper into your skills and experience.' },
  { step: 4, title: 'Case Study / Tech Screen', description: 'A practical, real-world challenge that mimics the work you\'d do.' },
  { step: 5, title: 'Final Interviews', description: 'Meet with a few team members (and a founder!) to ensure a great culture fit.' },
  { step: 6, title: 'Offer!', description: 'We move fast. If it\'s a great fit, we\'ll send you a competitive offer.' },
];

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fadeInUp: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  // Get unique department values for filters
  const departments = ['All', ...new Set(positions.map(p => p.department))];

  // Memoized filter logic
  const filteredPositions = useMemo(() => {
    return positions.filter(pos => {
      const matchesSearch = pos.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            pos.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDept = selectedDept === 'All' || pos.department === selectedDept;
      return matchesSearch && matchesDept;
    });
  }, [searchTerm, selectedDept]);

  return (
    <div className="bg-slate-950 text-slate-300">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900/30 via-slate-900 to-cyan-900/30" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Join Our Mission
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We're building the future of productivity—a tool that is fast, beautiful, and intelligent. We're looking for passionate builders and dreamers to join us.
          </motion.p>
        </motion.div>
      </div>
      
      {/* "Why Join Us?" (Perks & Benefits) Section */}
      <div className="py-24 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-100 mb-4">Perks & Benefits</h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              We invest in our team. Here are just a few of the ways we support your health, happiness, and growth.
            </p>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.slice(0, 4).map((benefit, index) => ( // Show first 4
              <motion.div
                key={index}
                variants={item}
                className="bg-slate-900/50 backdrop-blur-lg p-6 rounded-2xl border border-slate-800/50 text-center"
              >
                <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-slate-100 text-lg mb-2">{benefit.title}</h3>
                <p className="text-slate-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8"
          >
            {benefits.slice(4).map((benefit, index) => ( // Show rest
              <motion.div
                key={index}
                variants={item}
                className="bg-slate-900/50 backdrop-blur-lg p-6 rounded-2xl border border-slate-800/50 text-center"
              >
                <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-slate-100 text-lg mb-2">{benefit.title}</h3>
                <p className="text-slate-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* NEW: Life at TaskFlow Section */}
      <div className="py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-100 mb-4">Life at TaskFlow</h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              We're more than just a company. We're a community of passionate individuals.
            </p>
          </motion.div>

          {/* Culture Highlights */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {cultureHighlights.map((item, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-100 mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Photo Gallery Placeholder */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            <motion.div variants={item} className="aspect-square bg-slate-800/50 rounded-lg flex items-center justify-center text-slate-500">
              [Image of team retreat]
            </motion.div>
            <motion.div variants={item} className="aspect-square bg-slate-800/50 rounded-lg flex items-center justify-center text-slate-500">
              [Image of hackathon]
            </motion.div>
            <motion.div variants={item} className="aspect-square bg-slate-800/50 rounded-lg flex items-center justify-center text-slate-500">
              [Image of virtual event]
            </motion.div>
            <motion.div variants={item} className="aspect-square bg-slate-800/50 rounded-lg flex items-center justify-center text-slate-500">
              [Image of office space]
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* NEW: Testimonials Section */}
      <div className="py-24 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={item} className="bg-slate-900/50 backdrop-blur-lg p-8 rounded-2xl border border-slate-800/50">
                <MessageCircle className="w-8 h-8 text-cyan-400 mb-4" />
                <p className="text-lg text-slate-300 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full border-2 border-cyan-500/50" />
                  <div>
                    <h4 className="font-semibold text-slate-100">{testimonial.name}</h4>
                    <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* "Current Openings" Section (Now with Filters) */}
      <div className="py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-100 mb-4">Current Openings</h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Find your next opportunity. We're looking for the best and brightest to join us.
            </p>
          </motion.div>
          
          {/* Filter UI */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-4 mb-8"
          >
            <div className="relative grow">
              <input
                type="text"
                placeholder="Search by title or keyword..."
                className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-slate-800/50 rounded-lg text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="w-5 h-5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
            <div className="shrink-0">
              <select
                className="w-full md:w-auto px-4 py-3 bg-slate-900/50 border border-slate-800/50 rounded-lg text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                onChange={(e) => setSelectedDept(e.target.value)}
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </motion.div>

          {/* Openings List */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible" // Animate as it filters
            className="space-y-4"
          >
            {filteredPositions.length > 0 ? (
              filteredPositions.map((position) => (
                <motion.div
                  key={position.id}
                  variants={item}
                  layout // Animate layout changes
                  whileHover={{ x: 5 }}
                  className="bg-slate-900/50 backdrop-blur-lg p-6 rounded-xl border border-slate-800/50 hover:border-cyan-500/30 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="grow">
                      <h3 className="text-xl font-semibold text-slate-100">{position.title}</h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 mb-3">
                        <span className="text-slate-400 text-sm flex items-center gap-1.5">
                          <Briefcase className="w-4 h-4" />
                          {position.type}
                        </span>
                        <span className="text-slate-400 text-sm flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </span>
                        <span className="text-slate-400 text-sm flex items-center gap-1.5">
                          <Award className="w-4 h-4" />
                          {position.department}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm">{position.description}</p>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-2 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity w-full md:w-auto shrink-0"
                    >
                      Apply Now
                    </motion.button>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div variants={item} className="text-center py-10">
                <p className="text-slate-400 text-lg">No positions match your search.</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* NEW: Hiring Process Section */}
      <div className="py-24 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-100 mb-4">Our Hiring Process</h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              We believe in a transparent, respectful, and (relatively) fast process. Here's what to expect.
            </p>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* The vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-700" aria-hidden="true" />
            
            <div className="space-y-8">
              {hiringProcess.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="relative group"
                >
                  {/* The Dot - always in the middle on desktop */}
                  <div className="absolute left-4 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-slate-950 rounded-full border-4 border-cyan-500 flex items-center justify-center">
                      <span className="text-cyan-400 font-semibold">{item.step}</span>
                    </div>
                  </div>

                  {/* Timeline Item Layout - alternates */}
                  <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    
                    {/* Content Box Side */}
                    <div className="md:w-1/2">
                      <div className={`pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 lg:pr-32' : 'md:pl-16 lg:pl-32'}`}>
                        <div className="bg-slate-900/50 backdrop-blur-lg p-6 rounded-2xl border border-slate-800/50 shadow-lg">
                          <h4 className="text-xl font-semibold text-slate-100 mb-2">{item.title}</h4>
                          <p className="text-slate-400 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Empty Spacer Side */}
                    <div className="md:w-1/2" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* "Don't see a role?" CTA */}
      <div className="py-24 bg-slate-950">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-slate-900/50 backdrop-blur-lg p-10 rounded-2xl border border-slate-800/50 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-semibold text-slate-100 mb-4">Don't see a role that fits?</h2>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            We're always looking for talented, passionate individuals. If you believe you have what it takes to help us build the future of productivity, we want to hear from you.
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-slate-800/50 border border-slate-700 text-slate-200 font-medium rounded-lg hover:bg-slate-800/70 transition-colors"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
