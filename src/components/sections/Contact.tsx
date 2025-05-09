import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'; // Import EmailJS
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Instagram } from 'lucide-react';

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

    // Replace with your actual EmailJS Service ID, Template ID, and User ID (Public Key)
    const serviceID = import.meta.env.VITE_SERVICE_ID as string;
    const templateID = import.meta.env.VITE_TEMPLATE_ID as string;
    const userID = import.meta.env.VITE_USER_ID as string;

    console.log('Using Template ID:', templateID);

    // The parameters object should match the variables in your EmailJS template
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
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-gray-700 mb-8">
              Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <Mail className="text-primary-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Email</h4>
                  <p className="text-gray-600">guptasagar123@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary-100 p-3 rounded-lg mr-4">
                  <Phone className="text-secondary-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Phone</h4>
                  <p className="text-gray-600">+91 9834619561</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <MapPin className="text-green-600" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Location</h4>
                  <p className="text-gray-600">Pune Maharashtra, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="font-bold text-gray-800 dark:text-gray-100 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <motion.a 
                  href="https://www.linkedin.com/in/sagar-gupta-655271187" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors text-gray-700 dark:text-gray-300"
                  whileHover={{ backgroundColor: '#0077B5', color: '#ffffff' }}
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a 
                  href="https://github.com/sagar-528" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors text-gray-700 dark:text-gray-300"
                  whileHover={{ backgroundColor: '#333333', color: '#ffffff' }}
                >
                  <Github size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 dark:text-white">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  required
                ></textarea>
              </div>
              <div>
                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium rounded-lg transition-all dark:from-primary-500 dark:to-secondary-500"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;