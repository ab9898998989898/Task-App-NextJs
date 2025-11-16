'use client';
import { motion } from 'framer-motion';
import { 
  Users, 
  Rocket, 
  Target, 
  BarChart3, 
  CheckCircle, 
  Zap, 
  Globe, 
  Flag, 
  Eye, 
  Calendar, 
  Brain, 
  Briefcase, 
  Building, 
  Linkedin, 
  Twitter, 
  HelpCircle,
  MapPin
} from 'lucide-react';

// Expanded Stats
const stats = [
  { id: 1, name: 'Active Users', value: '10,000+', icon: Users },
  { id: 2, name: 'Tasks Completed', value: '1M+', icon: CheckCircle },
  { id: 3, name: 'Global Reach', value: '150+ Countries', icon: Globe },
  { id: 4, name: 'Uptime', value: '99.9%', icon: Zap },
];

// Values (unchanged, but still used)
const values = [
  {
    name: 'User-Centric',
    description: 'We put our users at the center of everything we do, creating intuitive experiences that make task management effortless.',
    icon: Users,
  },
  {
    name: 'Innovation',
    description: 'We constantly push boundaries and explore new ways to help people be more productive and organized.',
    icon: Rocket,
  },
  {
    name: 'Simplicity',
    description: 'We believe in the power of simplicity, creating tools that are powerful yet easy to use.',
    icon: Target,
  },
  {
    name: 'Data-Driven',
    description: 'We make decisions based on data and user feedback to continuously improve our products.',
    icon: BarChart3,
  },
];

// NEW: Timeline Data
const timeline = [
  {
    year: '2020',
    title: 'The Idea',
    description: 'TaskFlow is born from our founder\'s frustration with clunky, oversized project management tools. The goal: create something fast, simple, and beautiful.',
  },
  {
    year: '2021',
    title: 'Launch & First Users',
    description: 'After a year of late nights and countless revisions, TaskFlow 1.0 launches to a small beta group. We hit 1,000 active users in our first month.',
  },
  {
    year: '2022',
    title: 'Crossing 10k Users',
    description: 'Word of mouth spreads. We secure our first round of seed funding and grow the team, focusing on building out our most requested features.',
  },
  {
    year: '2024',
    title: 'The AI Revolution',
    description: 'We launch TaskFlow AI, integrating intelligent suggestions, task prioritization, and automated workflows, helping teams be more productive than ever.',
  },
];

// NEW: Culture Data
const culture = [
  {
    name: 'Radical Transparency',
    description: 'We share everything—from our metrics to our challenges. We believe an informed team is an empowered team.',
    icon: Eye,
  },
  {
    name: 'Deep Ownership',
    description: 'We\'re a team of builders and owners. Everyone has the power to make an impact and is trusted to deliver.',
    icon: Brain,
  },
  {
    name: 'Sustainable Balance',
    description: 'We are in this for the long haul. We believe in focused work, but also in recharging, family, and a life outside the office.',
    icon: Zap,
  },
];

// Expanded Team with placehold.co images and social links
const team = [
  {
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    image: 'https://placehold.co/400x400/0f172a/38bdf8?text=AJ',
    bio: 'Passionate about productivity and creating tools that make a difference in people\'s lives.',
    socials: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Taylor Smith',
    role: 'Lead Designer',
    image: 'https://placehold.co/400x400/0f172a/38bdf8?text=TS',
    bio: 'Believes in designing intuitive experiences that delight users and solve real problems.',
    socials: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Jordan Lee',
    role: 'Lead Developer',
    image: 'https://placehold.co/400x400/0f172a/38bdf8?text=JL',
    bio: 'Loves building scalable systems and solving complex technical challenges.',
    socials: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Morgan Chen',
    role: 'Product Manager',
    image: 'https://placehold.co/400x400/0f172a/38bdf8?text=MC',
    bio: 'Focused on creating products that users love and that deliver real value.',
    socials: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Casey Kim',
    role: 'Head of Marketing',
    image: 'https://placehold.co/400x400/0f172a/38bdf8?text=CK',
    bio: 'Telling the world our story, one productive user at a time.',
    socials: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Devon Ray',
    role: 'Customer Success Lead',
    image: 'https://placehold.co/400x400/0f172a/38bdf8?text=DR',
    bio: 'The user\'s champion. Ensuring everyone gets the most out of TaskFlow.',
    socials: { linkedin: '#', twitter: '#' },
  },
];

// NEW: Office Locations Data
const offices = [
  {
    name: 'Global HQ',
    address: '123 Main St, San Francisco, USA',
    icon: Building,
  },
  {
    name: 'EMEA Hub',
    address: '789 High Rd, London, UK',
    icon: Building,
  },
  {
    name: 'APAC Office',
    address: '456 Ocean Ave, Sydney, AU',
    icon: Building,
  },
];

// NEW: FAQ Data
const faqs = [
  {
    question: 'What is TaskFlow\'s core mission?',
    answer: 'Our mission is to empower individuals and teams to achieve clarity and focus by providing intuitive and powerful task management tools. We aim to eliminate the "work about work" so you can focus on what truly matters.',
  },
  {
    question: 'How is TaskFlow different from other tools?',
    answer: 'We focus on speed, simplicity, and intelligent automation. While other tools become bloated and complex, TaskFlow is designed to be minimal yet powerful, with AI features that learn from you to make you more productive over time.',
  },
  {
    question: 'Is my data secure with TaskFlow?',
    answer: 'Absolutely. We use bank-level encryption (AES-256) for all data at rest and in transit. Security and privacy are not features, they are the foundation of our product. We are fully GDPR and SOC 2 compliant.',
  },
  {
    question: 'Do you offer plans for non-profits or students?',
    answer: 'Yes! We believe in supporting those who are learning and those who are making the world a better place. Please visit our pricing page or contact support for more information on our discounted plans.',
  },
];

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.48, 0.15, 0.25, 0.96],
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

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="bg-slate-950 text-slate-300">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-cyan-900/30" />
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center"
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            About TaskFlow
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We're building the future of productivity.
            Empowering individuals and teams to achieve more through intuitive, fast, and intelligent task management.
          </motion.p>
        </motion.div>
      </div>

      {/* Stats Section (Expanded) */}
      <div className="bg-slate-900/50 relative py-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 to-transparent opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.id}
                  variants={fadeInUp}
                  className="bg-slate-900/50 backdrop-blur-lg p-8 rounded-2xl border border-slate-800/50 hover:border-cyan-500/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-4xl font-bold text-slate-100 mb-2">{stat.value}</h3>
                  <p className="text-slate-400">{stat.name}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* NEW: Mission & Vision Section */}
      <div className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 lg:gap-16 items-start"
          >
            <motion.div variants={fadeInUp} className="mb-12 lg:mb-0 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Flag className="w-5 h-5 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold text-slate-100">Our Mission</h2>
              </div>
              <p className="text-lg text-slate-400 leading-relaxed">
                To eliminate the chaos of modern work. We're dedicated to creating tools that are not only powerful but also a joy to use, bringing clarity, focus, and alignment to teams and individuals, no matter how they work. We fight for the user, prioritizing speed and simplicity above all else.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="lg:mt-0 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-cyan-400" />
                </div>
                <h2 className="text-3xl font-bold text-slate-100">Our Vision</h2>
              </div>
              <p className="text-lg text-slate-400 leading-relaxed">
                We envision a world where technology gets out of the way, allowing human creativity and collaboration to flourish. We are building an intelligent, predictive, and seamless productivity hub that anticipates your needs and automates the mundane, freeing you to do your best work.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* NEW: Timeline Section (Replaces "Our Story") */}
      <div className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl font-bold text-slate-100 mb-4">Our Journey</h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              From a simple idea to a platform trusted by thousands.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* The vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-700 hidden md:block" aria-hidden="true" />
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-16"
            >
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="relative group"
                >
                  {/* Timeline Item Layout */}
                  <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="md:w-1/2 flex justify-center">
                      <div className={`md:w-3/4 ${index % 2 === 0 ? 'md:pl-16 lg:pl-32' : 'md:pr-16 lg:pr-32'} `}>
                        <div className="bg-slate-900/50 backdrop-blur-lg p-6 rounded-2xl border border-slate-800/50 shadow-lg text-center md:text-left">
                          <h3 className="text-2xl font-bold text-cyan-400 mb-2">{item.year}</h3>
                          <h4 className="text-xl font-semibold text-slate-100 mb-3">{item.title}</h4>
                          <p className="text-slate-400">{item.description}</p>
                        </div>
                      </div>
                    </div>
                    {/* The Dot on the Timeline */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
                      <div className="w-8 h-8 bg-slate-950 rounded-full border-4 border-cyan-500 flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-cyan-400" />
                      </div>
                    </div>
                    <div className="md:w-1/2" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-100 mb-4">Our Values</h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              These principles guide everything we do at TaskFlow and shape our company culture.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.name}
                  variants={fadeInUp}
                  className="bg-slate-900/50 backdrop-blur-lg p-8 rounded-2xl border border-slate-800/50 hover:border-cyan-500/30 transition-colors text-center"
                >
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-3">{value.name}</h3>
                  <p className="text-slate-400">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* NEW: Our Culture Section */}
      <div className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-100 mb-4">Our Culture</h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              We're a team of builders, creators, and collaborators. This is what we're all about.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {culture.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  variants={fadeInUp}
                  className="bg-slate-900/50 backdrop-blur-lg p-8 rounded-2xl border border-slate-800/50 text-center"
                >
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-3">{item.name}</h3>
                  <p className="text-slate-400">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Team Section (Expanded) */}
      <div className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-100 mb-4">Meet Our Team</h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Passionate individuals working together to build the future of task management.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                className="bg-slate-900/50 backdrop-blur-lg p-6 rounded-2xl border border-slate-800/50 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-cyan-500/50"
                  onError={(e) => { e.target.src = 'https://placehold.co/400x400/0f172a/38bdf8?text=??' }}
                />
                <h3 className="text-xl font-semibold text-slate-100">
                  {member.name}
                </h3>
                <p className="text-cyan-400 mb-3">{member.role}</p>
                <p className="text-slate-400 text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center gap-4">
                  <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* NEW: Office Locations Section */}
      <div className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-100 mb-4">Our Offices</h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              We're a remote-first company, but we have hubs for collaboration around the globe.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {offices.map((office, index) => {
              const Icon = office.icon;
              return (
                <motion.div
                  key={office.name}
                  variants={fadeInUp}
                  className="bg-slate-900/50 backdrop-blur-lg p-8 rounded-2xl border border-slate-800/50 text-center"
                >
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-3">{office.name}</h3>
                  <div className="flex items-start justify-center gap-2 text-slate-400">
                    <MapPin className="w-5 h-5 text-slate-500 mt-1 flex-shrink-0" />
                    <span>{office.address}</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
      
      {/* NEW: Join Our Team CTA */}
      <div className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Briefcase className="w-12 h-12 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-100 mb-6">Join Our Team</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Love building tools that help people? We're always looking for passionate, talented individuals to join our mission.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-slate-800/50 border border-slate-700 text-slate-200 font-medium rounded-lg hover:bg-slate-800/70 transition-colors"
            >
              See Open Positions
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      {/* NEW: FAQ Section */}
      <div className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-100 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Have questions? We've got answers.
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
                className="bg-slate-900/50 p-6 rounded-lg border border-slate-800/50 text-center"
              >
                <h3 className="text-lg font-semibold text-slate-100 mb-3 flex items-center justify-center gap-2">
                  <HelpCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Section (Unchanged) */}
      <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-100 mb-6">Ready to transform your productivity?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of users who have already simplified their task management with TaskFlow.
            </p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Get Started for Free
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-slate-800/50 border border-slate-700 text-slate-200 font-medium rounded-lg hover:bg-slate-800/70 transition-colors"
              >
                Contact Sales
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}