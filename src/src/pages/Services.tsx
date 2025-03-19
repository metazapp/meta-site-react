import { motion } from 'framer-motion';
import { Code, Palette, LineChart, Globe, Shield, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code size={40} />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning']
    },
    {
      icon: <Palette size={40} />,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that enhance user experience.',
      features: ['User Research', 'Wireframing', 'Prototyping']
    },
    {
      icon: <LineChart size={40} />,
      title: 'Digital Marketing',
      description: 'Strategic marketing solutions to grow your online presence.',
      features: ['SEO', 'Content Marketing', 'Social Media']
    },
    {
      icon: <Globe size={40} />,
      title: 'E-Commerce Solutions',
      description: 'Complete online store setup and management.',
      features: ['Payment Integration', 'Inventory Management', 'Analytics']
    },
    {
      icon: <Shield size={40} />,
      title: 'ERP Systems',
      description: 'Streamline your business operations with enterprise resource planning.',
      features: ['Accounting', 'Inventory', 'HR Management']
    },
    
    {
      icon: <Smartphone size={40} />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications.',
      features: ['iOS Development', 'Android Development', 'React Native/Flutter']
    }
  ];

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
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              We offer a comprehensive range of digital solutions to help your business thrive
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-indigo-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;