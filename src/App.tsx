import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Menu,
  X,
  Clock,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Scissors,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const controls = useAnimation();
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const inView = useInView(servicesRef, {
    amount: 0.2,
    once: true
  });
  
  const aboutInView = useInView(aboutRef, {
    amount: 0.2,
    once: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const yOffset = -80; // Offset for header height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: (i: number) => ({
      x: i % 2 === 0 ? -100 : 100,
      opacity: 0
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen min-w-[430px]">
      <div className="relative">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ height: '55vh' }}
        >
          <source src="public/VID_25731223_194720_488.mp4" type="video/mp4" />
        </video>
        
        <div className="relative" style={{ height: '55vh' }}>
          <div className="nav-container w-full">
            <header className="container mx-auto px-4 py-5 flex justify-between items-center max-w-[1260px]">
              <div className="flex items-center">
                <img 
                  src="/logo-circle.png" 
                  alt="Clippership Logo" 
                  className="h-[44px] w-[44px] mr-2"
                />
                <span className="text-black text-[1.7rem] font-bold font-montserrat">Clippership</span>
              </div>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-black hover:text-gray-700 font-montserrat text-[0.95rem] font-bold">
                  Home
                </a>
                <a 
                  href="#services" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('services');
                  }}
                  className="text-black hover:text-gray-700 font-montserrat text-[0.95rem] font-bold"
                >
                  Services
                </a>
                <a 
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                  }}
                  className="text-black hover:text-gray-700 font-montserrat text-[0.95rem] font-bold"
                >
                  About
                </a>
                <a href="mailto:theclippershipmb@gmail.com" className="text-black hover:text-gray-700 font-montserrat text-[0.95rem] font-bold">
                  Contact
                </a>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-black hover:text-gray-700 font-montserrat text-[0.95rem] font-bold"
                >
                  Book Now
                </button>
              </nav>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-black"
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </header>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-white bg-opacity-90 absolute top-20 left-0 right-0 p-4 z-50">
              <nav className="flex flex-col space-y-4 items-end">
                <a href="#" className="text-black hover:text-gray-700 font-montserrat font-bold">
                  Home
                </a>
                <a 
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('services');
                    setIsMenuOpen(false);
                  }}
                  className="text-black hover:text-gray-700 font-montserrat font-bold"
                >
                  Services
                </a>
                <a 
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                    setIsMenuOpen(false);
                  }}
                  className="text-black hover:text-gray-700 font-montserrat font-bold"
                >
                  About
                </a>
                <a href="mailto:theclippershipmb@gmail.com" className="text-black hover:text-gray-700 font-montserrat font-bold">
                  Contact
                </a>
                <button 
                  onClick={() => {
                    scrollToSection('services');
                    setIsMenuOpen(false);
                  }}
                  className="text-black hover:text-gray-700 font-montserrat font-bold"
                >
                  Book Now
                </button>
              </nav>
            </div>
          )}

          <main className="container mx-auto px-4 py-16 text-center max-w-[1260px]">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat text-black">
              Welcome to Clippership
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-montserrat text-black">
              The world's first solar-powered mobile barbershop
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 font-montserrat relative shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden group"
              style={{
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2), 0 0 30px rgba(0, 0, 0, 0.1)',
                background: 'linear-gradient(45deg, #000000, #333333)'
              }}
            >
              <span className="relative z-10 mix-blend-difference ">Book Now</span>
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 group-hover:opacity-40 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"
                style={{
                  animation: 'shimmer 2s infinite linear',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)'
                }}
              ></div>
              <div 
                className="absolute inset-0 rounded-full opacity-50"
                style={{
                  background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)',
                  animation: 'pulse 2s infinite'
                }}
              ></div>
            </motion.button>
          </main>
        </div>
      </div>

      {/* Services Section */}
      <section 
        id="services" 
        className="py-20 relative"
        style={{
          backgroundImage: 'url("public/van_interior_1.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-white opacity-90"></div>
        <div className="container mx-auto px-4 max-w-[1260px] relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4 font-montserrat">Our Services</h2>
          <p className="text-center text-gray-600 mb-12 font-montserrat">Base prices displayed</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <img 
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Mobile Barbershop Interior"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Barbershop Service"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>

          <motion.div 
            ref={servicesRef}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="max-w-3xl mx-auto"
          >
            <div className="space-y-8">
              {[
                {
                  title: "Haircut",
                  description: "Classic, modern, or edgy. We can do it all.",
                  price: "$45"
                },
                {
                  title: "Haircut + Beard Trim",
                  description: "Add a trim and shape to your beard along with your haircut.",
                  price: "+$10"
                },
                {
                  title: "Haircut + Shave",
                  description: "The ultimate in luxury. Facial cleanse, hot towels, and an ultra-smooth straight razor shave.",
                  price: "+$50"
                },
                {
                  title: "Kids and Seniors",
                  description: "Discounts available.",
                  price: "$45"
                }
              ].map((service, index) => (
                <motion.div 
                  key={service.title}
                  custom={index}
                  variants={itemVariants}
                  className="flex justify-between items-center p-6 bg-gray-100 rounded-lg hover:shadow-md transition duration-300 service-card"
                >
                  <div>
                    <h3 className="text-xl font-semibold font-montserrat">{service.title}</h3>
                    <p className="text-gray-600 font-montserrat">{service.description}</p>
                  </div>
                  <span className="text-2xl font-bold font-montserrat">{service.price}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        className="py-20 relative"
        style={{
          backgroundImage: 'url("public/van_interior_2.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container mx-auto px-4 max-w-[1260px] relative z-10">
        
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <motion.div 
                ref={aboutRef}
                initial={{ opacity: 0, x: -100 }}
                animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, type: "spring" }}
                className="lg:col-span-4 order-2 lg:order-1 flex justify-center lg:justify-start"
              >
                <div className="relative w-[352px] h-[400px] overflow-hidden rounded-lg">
                  <img 
                    src="public/tim_profile.jpg"
                    alt="Tim Profile"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                      objectPosition: 'center left'
                    }}
                  />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 100 }}
                animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, type: "spring", delay: 0.3 }}
                className="lg:col-span-8 order-1 lg:order-2"
              >
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold text-left mb-16 font-montserrat text-white">About</h2>
                  <p className="text-white text-lg leading-relaxed">
                    Tim Almeida has been a barber in the Boston area for 15 years.
                    He doesn't specialize in any one area of the trade that he
                    loves, instead branching out to learn how to do every type of
                    haircut and service to the best of his ability. After all
                    those years working behind a barber chair, he wanted to do
                    something a little different, and The Clippership was born.
                  </p>
                  
                  <p className="text-white text-lg leading-relaxed">
                    A lover of the ocean, Tim wanted to give his new mobile
                    barbershop the feel of a sailboat cabin, while having the
                    nostalgic feel of an old-school barbershop at the same time.
                    The Clippership brings the ultimate barbershop experience to
                    your front door or office in the most convenient fashion. All
                    aboard!
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black bg-opacity-80 text-white py-8">
        <div className="container mx-auto px-4 max-w-[1260px] min-w-[430px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-semibold mb-4 flex items-center font-montserrat">
                <Clock className="mr-2" /> Hours
              </h3>
              <p className="font-montserrat">Mon-Fri: 9am - 7pm</p>
              <p className="font-montserrat">Sat: 10am - 6pm</p>
              <p className="font-montserrat">Sun: Closed</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-semibold mb-4 flex items-center font-montserrat">
                <Phone className="mr-2" /> Contact
              </h3>
              <p className="font-montserrat">Phone: (781) 520-6378</p>
              <a href="mailto:theclippershipmb@gmail.com" className="font-montserrat text-white hover:text-gray-300">
                Email: theclippershipmb@gmail.com
              </a>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-semibold mb-4 flex items-center font-montserrat">
                <MapPin className="mr-2" /> Location
              </h3>
              <p className="font-montserrat">We come to you!</p>
              <p className="font-montserrat">&nbsp;</p>
              <div className="flex space-x-4 mt-4">
                <a href="https://www.instagram.com/theclippership/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  <Instagram size={24} />
                </a>
                <a href="https://m.facebook.com/theclippership/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  <Facebook size={24} />
                </a>
                <a href="https://g.page/Theclippership?av" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  <MapPin size={24} />
                </a>
                <a href="https://www.linkedin.com/in/the-clippership-mobile-barbershop-a34963201/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  <Linkedin size={24} />
                </a>
                <a href="https://twitter.com/ClippershipThe?s=07" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
