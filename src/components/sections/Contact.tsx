import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageSquare } from 'lucide-react';
import ScrollReveal from '../scroll/ScrollReveal';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const serviceID = import.meta.env.VITE_SERVICE_ID as string;
    const templateID = import.meta.env.VITE_TEMPLATE_ID as string;
    const userID = import.meta.env.VITE_USER_ID as string;

    console.log('Using Template ID:', templateID);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      email: "gupta.sagar528@gmail.com",
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, userID);
      console.log('Email sent successfully via EmailJS!');
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to send email via EmailJS:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0b0b1e] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -left-20 bottom-0 w-96 h-96 bg-primary-900/10 rounded-full blur-[100px]"></div>
      <div className="absolute -right-20 top-0 w-96 h-96 bg-secondary-900/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
            <div className="section-divider opacity-50"></div>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              I'm available for freelance projects and full-time opportunities.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <motion.div
            className="lg:w-5/12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                <MessageSquare className="text-primary-500" /> Let's Chat
              </h3>
              <p className="text-gray-400 mb-10 leading-relaxed">
                Whether you have a question, a project proposition, or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-8">
                {[
                  { icon: Mail, label: 'Email', value: 'guptasagar123@gmail.com', color: 'text-primary-400', bg: 'bg-primary-500/10' },
                  { icon: Phone, label: 'Phone', value: '+91 9834619561', color: 'text-secondary-400', bg: 'bg-secondary-500/10' },
                  { icon: MapPin, label: 'Location', value: 'Pune Maharashtra, India', color: 'text-green-400', bg: 'bg-green-500/10' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start group">
                    <div className={`p-3 rounded-lg mr-4 ${item.bg} group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className={item.color} size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-200 text-sm uppercase tracking-wide mb-1 opacity-80">{item.label}</h4>
                      <p className="text-gray-300 font-medium group-hover:text-white transition-colors">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <h4 className="font-bold text-gray-300 mb-6">Connect on Socials</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/sagar-gupta-655271187', color: 'hover:bg-[#0077B5]' },
                    { icon: Github, href: 'https://github.com/sagar-528', color: 'hover:bg-[#333]' },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} hover:text-white hover:border-transparent hover:shadow-lg`}
                      whileHover={{ y: -5 }}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-7/12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Project Inquiry"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold rounded-lg shadow-lg shadow-primary-500/30 flex items-center justify-center gap-2 hover:shadow-primary-500/50 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={20} /> Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;