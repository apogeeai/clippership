import React from "react";
import {
  Menu,
  X,
  Clock,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Scissors,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80")',
      }}
    >
      <div className="bg-black bg-opacity-70 min-h-screen">
        <header className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <Scissors className="h-10 w-10 text-white mr-2" />
            <span className="text-white text-2xl font-bold">Clippership</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:text-gray-300">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Services
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              About
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Contact
            </a>
          </nav>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>

        {isMenuOpen && (
          <div className="md:hidden bg-black bg-opacity-90 absolute top-20 left-0 right-0 p-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-white hover:text-gray-300">
                Home
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Services
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                About
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Contact
              </a>
            </nav>
          </div>
        )}

        <main className="container mx-auto px-4 py-16 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to Clippership
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            The world's first solar-powered mobile barbershop
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300">
            Book Now
          </button>
        </main>

        <footer className="bg-black bg-opacity-80 text-white py-8">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Clock className="mr-2" /> Hours
              </h3>
              <p>Mon-Fri: 9am - 7pm</p>
              <p>Sat: 10am - 6pm</p>
              <p>Sun: Closed</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Phone className="mr-2" /> Contact
              </h3>
              <p>Phone: (781) 520 - 6378</p>
              <p>Email: theclippershipmb@gmail.com</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <MapPin className="mr-2" /> Location
              </h3>
              <p>123 Barber Street</p>
              <p>Styleville, ST 12345</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-gray-300">
                  <Instagram />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <Facebook />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <Twitter />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
