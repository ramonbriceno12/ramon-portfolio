const ContactModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
    isOpen,
    onClose,
  }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-full max-w-md p-4 sm:p-6">
          {/* Close Button */}
          <div className="flex justify-end mb-4">
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 focus:outline-none text-2xl"
            >
              &times;
            </button>
          </div>
  
          {/* Grid Layout for Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* LinkedIn Button */}
            <a
              href="https://linkedin.com/in/ramonalejandrobriceno/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-blue-600 text-white flex items-center justify-center h-40 sm:h-60 w-full rounded-lg shadow-lg hover:bg-blue-700 transition"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-12 h-12"
              >
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6 1.12 6 0 4.88 0 3.5 0 2.12 1.12 1 2.5 1 3.88 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4V8.5zm7.5 0h3.78v2.02h.05c.53-.96 1.83-1.97 3.77-1.97 4.04 0 4.78 2.66 4.78 6.12V24h-4V15.46c0-2.04-.04-4.66-2.85-4.66-2.86 0-3.3 2.23-3.3 4.52V24h-4V8.5z" />
              </svg>
            </a>
  
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/584122434077"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-500 text-white flex items-center justify-center h-40 sm:h-60 w-full rounded-lg shadow-lg hover:bg-green-600 transition"
              aria-label="WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-12 h-12"
              >
                <path d="M12.04 0C5.4 0 0 5.39 0 12.04c0 2.12.55 4.17 1.6 6.02L0 24l6.18-1.61a12.05 12.05 0 0 0 5.86 1.51h.02C18.68 23.9 24 18.58 24 12.04 24 5.4 18.68 0 12.04 0Zm5.89 17.29c-.24.66-1.39 1.29-1.93 1.38-.5.08-1.13.12-1.84-.12-.43-.14-.98-.31-1.66-.6-2.93-1.27-4.84-4.42-4.98-4.63-.14-.2-1.18-1.57-1.18-3.01s.75-2.13 1.03-2.42c.26-.3.57-.37.77-.37h.56c.18 0 .42-.1.65.5.24.6.84 2.06.92 2.22.08.14.1.26.02.43-.08.16-.1.27-.2.4-.1.14-.22.3-.31.4-.1.1-.2.2-.1.4.14.3.64 1.27 1.37 2.06.94 1 1.73 1.32 2.02 1.47.3.15.47.12.65-.08.2-.22.73-.86.93-1.15.2-.3.4-.22.65-.13.27.08 1.72.8 2.02.96.3.15.5.22.58.34.08.14.08.79-.16 1.46Z" />
              </svg>
            </a>
            {/* Email Button */}
          <a
            href="mailto:ramonbriceno12@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-500 text-white flex items-center justify-center h-40 sm:h-60 w-full rounded-lg shadow-lg hover:bg-gray-600 transition"
            aria-label="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-12 h-12"
            >
              <path d="M12 13.7 1.8 6.18c-.3-.2-.7.02-.7.4v10.84c0 .56.46 1.02 1.02 1.02h17.76c.56 0 1.02-.46 1.02-1.02V6.58c0-.38-.4-.6-.7-.4L12 13.7Zm.06-1.4L21.9 5.2c.44-.28.18-.98-.3-.98H2.4c-.48 0-.74.7-.3.98L11.94 12.3c.2.14.46.14.66 0Z" />
            </svg>
          </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactModal;
  