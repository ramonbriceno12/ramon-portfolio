const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
          {/* Links Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start space-y-4 sm:space-y-0">
            <div className="flex space-x-8">
              <a
                href="#about"
                className="text-gray-400 hover:text-white transition"
              >
                About
              </a>
              <a
                href="#portfolio"
                className="text-gray-400 hover:text-white transition"
              >
                Portfolio
              </a>
              <a
                href="#experience"
                className="text-gray-400 hover:text-white transition"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="text-gray-400 hover:text-white transition"
              >
                Contact
              </a>
            </div>
            {/* Rights Section */}
            <p className="text-gray-400 text-sm mt-4 sm:mt-0">
              © {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  