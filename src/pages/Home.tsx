import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import webMobileImage from '../images/web-mobile-app.jpg';
import cloudImage from '../images/cloud-computing.jpg';
import aiImage from '../images/ai-technology.jpg';
import expertTeam from '../images/Expert-team.jpg';
import modernTech from '../images/modern-technology.jpg';
import qualityAssurance from '../images/Quality.jpg';  

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
   // Images for the slider with titles and subtitles
   const sliderContent = [
    {
      url: webMobileImage,  // Use the imported image variable
      alt: 'Web and Mobile Application Development',
      title: 'Cutting-Edge Web & Mobile Apps',
      subtitle: 'Responsive designs that perform flawlessly across all devices'
    },
    {
      url: cloudImage,  // Use the imported image variable
      alt: 'Cloud Computing Solutions',
      title: 'Scalable Cloud Solutions',
      subtitle: 'Secure, flexible infrastructure that grows with your business'
    },
    {
      url: aiImage,  // Use the imported image variable
      alt: 'Artificial Intelligence Integration',
      title: 'AI-Powered Innovation',
      subtitle: 'Smart solutions that transform data into actionable insights'
    }
  ];

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === sliderContent.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, );

  return (
    <div className="min-h-screen">
      {/* Hero Section with Image Slider */}
      <section className="pt-20 relative h-[50vh]">
        {/* Image Slider */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {sliderContent.map((content, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: currentSlide === index ? 1 : 0,
                zIndex: currentSlide === index ? 10 : 0
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${content.url})`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-purple-900/80" />
            </motion.div>
          ))}
        </div>

        {/* Content overlay */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center w-full text-white"
          >
            {sliderContent.map((content, index) => (
              <motion.div 
                key={index}
                className="space-y-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: currentSlide === index ? 1 : 0,
                  y: currentSlide === index ? 0 : 10,
                  position: currentSlide === index ? 'relative' : 'absolute',
                  zIndex: currentSlide === index ? 10 : 0
                }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold">
                  {content.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-200">
                  {content.subtitle}
                </p>
              </motion.div>
            ))}
            

            
            {/* Slide indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {sliderContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    currentSlide === index ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional results through our expertise and dedication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Team',
                description: 'Skilled professionals with years of experience',
                image: expertTeam
              },
              {
                title: 'Modern Technology',
                description: 'Using cutting-edge tools and frameworks',
                image: modernTech
              },
              {
                title: 'Quality Assurance',
                description: 'Rigorous testing and quality control',
                image: qualityAssurance
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={`${feature.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={feature.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <a 
            href="/contact" 
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;