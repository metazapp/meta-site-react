import { useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, ChevronRight, ChevronLeft } from 'lucide-react';

const About = () => {
  // Expanded team array with more members and years of experience
  const team = [
    {
      name: 'Anandraja',
      role: 'CEO & Founder'
    },
    {
      name: 'Mithra',
      role: 'Co-Founder'
    },
    {
      name: 'Mythili',
      role: 'Project Manager'
    },
    {
      name: 'Kumaran',
      role: 'Project Manager'
    },
    {
      name: 'Aravind',
      role: 'Sr.Developer'
    },
    {
      name: 'Sumalatha',
      role: 'Fullstack Developer'
    },
    {
      name: 'Narmadha',
      role: 'Cloud Engineer'
    },
    {
      name: 'Suruthi',
      role: 'Data Analyst'
    },
    {
      name: 'Sudar',
      role: 'Manager (Marketing)'
    },
    {
      name: 'Ragavan',
      role: ' Manager (Sales)'
    },
    {
      name: 'Maiyarasi',
      role: 'Manager (Social Media)'
    }
  ];

  // State for window width to handle responsive behavior
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  // Calculate cards to show based on screen size
  const getCardsToShow = () => {
    if (windowWidth < 640) return 2; // Mobile: 1 card
    if (windowWidth < 1024) return 3; // Tablet: 2 cards
    return 4; // Desktop: 4 cards
  };
  
  const [cardsToShow, setCardsToShow] = useState(getCardsToShow());
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = team.length - cardsToShow;
  
  // Update cards to show on window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setCardsToShow(getCardsToShow());
      // Ensure current index is valid after resize
      if (currentIndex > team.length - getCardsToShow()) {
        setCurrentIndex(team.length - getCardsToShow());
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);
  
  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, maxIndex]);
  
  // Handle next slide
  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };
  
  // Handle previous slide
  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
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
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              We're a team of passionate individuals dedicated to creating exceptional digital experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Founded in 2018, Metazapp Solutions began with a bold vision to empower businesses with innovative technology solutions. We focused on developing eCommerce platforms and Point of Sale (POS) systems tailored for retail outlets. Through dedication and a customer-centric approach, we delivered seamless, efficient, and scalable solutions that helped businesses streamline their operations and enhance their customer experiences. 
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center p-6"
            >
              <Users size={40} className="mx-auto text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with innovative digital solutions that drive growth and success
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-6"
            >
              <Target size={40} className="mx-auto text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading digital transformation partner for businesses worldwide
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-6"
            >
              <Award size={40} className="mx-auto text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Values</h3>
              <p className="text-gray-600">
                Innovation, integrity, and excellence in everything we do
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section with Slider */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the experts behind our success
            </p>
          </div>

          <div className="relative px-8">
            {/* Left Arrow */}
            <button 
              onClick={handlePrev}
              className="absolute -left-2 sm:-left-4 md:-left-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 shadow-lg sm:shadow-xl z-10 hover:bg-gray-100 transition-all duration-200 hover:scale-110"
              aria-label="Previous team members"
            >
              <ChevronLeft size={20} className="text-indigo-600" />
            </button>
            
            {/* Slider Container */}
            <div className="overflow-hidden py-4">
              <motion.div 
                className="flex gap-4 sm:gap-6 md:gap-8"
                initial={{ x: 0 }}
                animate={{ x: `-${currentIndex * (100 / cardsToShow)}%` }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                {team.map((member, index) => (
                  <motion.div
                    key={index}
                    className={`flex-none bg-white rounded-xl shadow-xl p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
                      cardsToShow === 1 ? 'w-full' : 
                      cardsToShow === 2 ? 'w-1/2' : 
                      cardsToShow === 3 ? 'w-1/3' : 
                      'w-1/4'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-md">
                        <span className="text-lg sm:text-xl font-bold text-indigo-600">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 truncate">{member.name}</h3>
                      <p className="text-indigo-600 text-sm sm:text-base truncate">{member.role}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            {/* Right Arrow */}
            <button 
              onClick={handleNext}
              className="absolute -right-2 sm:-right-4 md:-right-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 shadow-lg sm:shadow-xl z-10 hover:bg-gray-100 transition-all duration-200 hover:scale-110"
              aria-label="Next team members"
            >
              <ChevronRight size={20} className="text-indigo-600" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;