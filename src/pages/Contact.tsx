import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Check, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Set submitting state
    setStatus({
      submitting: true,
      submitted: false,
      success: false,
      message: 'Sending your message...'
    });
    
    try {
      // Replace this URL with your deployed Cloudflare Worker URL
      const workerUrl = 'https://mailworker.anandncs.workers.dev';
      
      const response = await fetch(workerUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      // Check if the response is valid JSON
      const contentType  = response.headers.get('content-type');
      
      if (contentType && contentType.includes('application/json')) {
        const result = await response.json();
        
        if (result.success) {
          // Success state
          setStatus({
            submitting: false,
            submitted: true,
            success: true,
            message: 'Thank you for contacting us!!. We will get back to you soon.'
          });
          
          // Reset form after successful submission
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
          
          // Clear success message after 5 seconds
          setTimeout(() => {
            setStatus(prev => ({
              ...prev,
              submitted: false,
              message: ''
            }));
          }, 5000);
        } else {
          // Error state
          setStatus({
            submitting: false,
            submitted: true,
            success: false,
            message: result.error || 'Something went wrong. Please try again later.'
          });
        }
      } else {
        // Handle non-JSON responses
        const textResponse = await response.text();
        
        if (response.ok && textResponse.includes("Email sent")) {
          // If the response contains success text but isn't JSON
          setStatus({
            submitting: false,
            submitted: true,
            success: true,
            message: 'Thank you for contacting us!!. We will get back to you soon.'
          });
          
          // Reset form after successful submission
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        } else {
          // Some other non-JSON error response
          console.error('Server response:', textResponse);
          setStatus({
            submitting: false,
            submitted: true,
            success: false,
            message: 'Received unexpected response from server. Please try again later.'
          });
        }
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus({
        submitting: false,
        submitted: true,
        success: false,
        message: 'Failed to connect to our server. Please try again later.'
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Get in touch with us. We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
              
              {/* Status message */}
              {status.submitted && (
                <div className={`p-4 mb-6 rounded-md ${status.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'} flex items-start gap-2`}>
                  {status.success ? (
                    <Check className="mt-0.5 flex-shrink-0" size={18} />
                  ) : (
                    <AlertCircle className="mt-0.5 flex-shrink-0" size={18} />
                  )}
                  <p>{status.message}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    required
                    disabled={status.submitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    required
                    disabled={status.submitting}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    required
                    disabled={status.submitting}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    required
                    disabled={status.submitting}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`w-full px-6 py-3 rounded-md text-white flex items-center justify-center gap-2 transition-colors duration-200 ${
                    status.submitting 
                      ? 'bg-indigo-400 cursor-not-allowed' 
                      : 'bg-indigo-600 hover:bg-indigo-700'
                  }`}
                  disabled={status.submitting}
                >
                  {status.submitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-indigo-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Our Location</h3>
                    <p className="text-gray-600">
                    No.117 - 1st Floor, Mettupalayam Road,<br />
                    Coimbatore - 641 047<br />
                    Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-indigo-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Phone Number</h3>
                    <p className="text-gray-600">+91 90034 14321</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-indigo-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Email Address</h3>
                    <p className="text-gray-600">hello@metazapp.com</p>
                  </div>
                </div>
              </div>

              {/* Map or Additional Information */}
              <div className="bg-gray-100 p-6 rounded-lg mt-8">
                <h3 className="font-semibold mb-4">Business Hours</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                  <li>Saturday: 10:00 AM - 4:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;