import React, { useEffect } from "react";
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

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
          style={{ maxHeight: '100vh' }}
        >
          <source src="public/VID_25731223_194720_488.mp4" type="video/mp4" />
        </video>
        
        <div className="relative bg-black bg-opacity-50">
          <header className="container mx-auto px-4 py-6 flex justify-between items-center">
            <div className="flex items-center">
              <img 
                src="/logo-circle.png" 
                alt="Clippership Logo" 
                className="h-[50px] w-[50px] mr-2"
              />
              <span className="text-black text-3xl font-bold font-montserrat">Clippership</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-black hover:text-gray-700 font-montserrat">
                Home
              </a>
              <a 
                href="#services" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('services');
                }}
                className="text-black hover:text-gray-700 font-montserrat"
              >
                Services
              </a>
              <a 
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
                className="text-black hover:text-gray-700 font-montserrat"
              >
                About
              </a>
              <a href="mailto:theclippershipmb@gmail.com" className="text-black hover:text-gray-700 font-montserrat">
                Contact
              </a>
            </nav>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-black"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </header>

          {isMenuOpen && (
            <div className="md:hidden bg-white bg-opacity-90 absolute top-20 left-0 right-0 p-4 z-50">
              <nav className="flex flex-col space-y-4 items-end">
                <a href="#" className="text-black hover:text-gray-700 font-montserrat">
                  Home
                </a>
                <a 
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('services');
                    setIsMenuOpen(false);
                  }}
                  className="text-black hover:text-gray-700 font-montserrat"
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
                  className="text-black hover:text-gray-700 font-montserrat"
                >
                  About
                </a>
                <a href="mailto:theclippershipmb@gmail.com" className="text-black hover:text-gray-700 font-montserrat">
                  Contact
                </a>
              </nav>
            </div>
          )}

          <main className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat text-black">
              Welcome to Clippership
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-montserrat text-black">
              The world's first solar-powered mobile barbershop
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300 font-montserrat">
              Book Now
            </button>
          </main>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white bg-opacity-80">
        <div className="container mx-auto px-4 max-w-[1260px]">
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

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex justify-between items-center p-6 bg-gray-100 rounded-lg hover:shadow-md transition duration-300">
                <div>
                  <h3 className="text-xl font-semibold font-montserrat">Haircut</h3>
                  <p className="text-gray-600 font-montserrat">Classic, modern, or edgy. We can do it all.</p>
                </div>
                <span className="text-2xl font-bold font-montserrat">$45</span>
              </div>

              <div className="flex justify-between items-center p-6 bg-gray-100 rounded-lg hover:shadow-md transition duration-300">
                <div>
                  <h3 className="text-xl font-semibold font-montserrat">Haircut + Beard Trim</h3>
                  <p className="text-gray-600 font-montserrat">Add a trim and shape to your beard along with your haircut.</p>
                </div>
                <span className="text-2xl font-bold font-montserrat">+$10</span>
              </div>

              <div className="flex justify-between items-center p-6 bg-gray-100 rounded-lg hover:shadow-md transition duration-300">
                <div>
                  <h3 className="text-xl font-semibold font-montserrat">Haircut + Shave</h3>
                  <p className="text-gray-600 font-montserrat">The ultimate in luxury. Facial cleanse, hot towels, and an ultra-smooth straight razor shave.</p>
                </div>
                <span className="text-2xl font-bold font-montserrat">+$50</span>
              </div>

              <div className="flex justify-between items-center p-6 bg-gray-100 rounded-lg hover:shadow-md transition duration-300">
                <div>
                  <h3 className="text-xl font-semibold font-montserrat">Kids and Seniors</h3>
                  <p className="text-gray-600 font-montserrat">Discounts available.</p>
                </div>
                <span className="text-2xl font-bold font-montserrat">$45</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100 bg-opacity-0">
        <div className="container mx-auto px-4 max-w-[1260px]">
          <h2 className="text-4xl font-bold text-center mb-16 font-montserrat text-white">About</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-4 order-2 lg:order-1 flex justify-center lg:justify-start">
                <div className="relative w-[352px] h-[400px] overflow-hidden rounded-lg">
                  <img 
                    src="public/tim_profile.jpg"
                    alt="Tim Profile"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
                      objectPosition: 'center'
                    }}
                  />
                </div>
              </div>
              
              <div className="lg:col-span-8 order-1 lg:order-2">
                <div className="space-y-6 font-montserrat">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black bg-opacity-80 text-white py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
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
            <p className="font-montserrat">Phone: (781) 520 - 6378</p>
            <a href="mailto:theclippershipmb@gmail.com" className="font-montserrat text-white hover:text-gray-300">
              Email: theclippershipmb@gmail.com
            </a>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4 flex items-center font-montserrat">
              <MapPin className="mr-2" /> Location
            </h3>
            <p className="font-montserrat">We come to you!</p>
            <p className="font-montserrat">123 Barber Street</p>
            <p className="font-montserrat">Styleville, ST 12345</p>
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
      </footer>
    </div>
  );
}

export default App;
