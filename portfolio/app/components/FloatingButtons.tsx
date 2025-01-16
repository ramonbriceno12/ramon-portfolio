const FloatingButtons: React.FC = () => {
    return (
        <div className="fixed bottom-8 right-8 space-y-4 z-50">
            {/* LinkedIn Button */}
            <a
                href="https://www.linkedin.com/in/ramonalejandrobriceno/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition"
                aria-label="LinkedIn"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                >
                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6 1.12 6 0 4.88 0 3.5 0 2.12 1.12 1 2.5 1 3.88 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4V8.5zm7.5 0h3.78v2.02h.05c.53-.96 1.83-1.97 3.77-1.97 4.04 0 4.78 2.66 4.78 6.12V24h-4V15.46c0-2.04-.04-4.66-2.85-4.66-2.86 0-3.3 2.23-3.3 4.52V24h-4V8.5z" />
                </svg>
            </a>

            {/* WhatsApp Button */}
            <a
                href="https://wa.me/584122434077"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-500 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition"
                aria-label="WhatsApp"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                >
                    <path d="M12.04 0C5.4 0 0 5.39 0 12.04c0 2.12.55 4.17 1.6 6.02L0 24l6.18-1.61a12.05 12.05 0 0 0 5.86 1.51h.02C18.68 23.9 24 18.58 24 12.04 24 5.4 18.68 0 12.04 0Zm5.89 17.29c-.24.66-1.39 1.29-1.93 1.38-.5.08-1.13.12-1.84-.12-.43-.14-.98-.31-1.66-.6-2.93-1.27-4.84-4.42-4.98-4.63-.14-.2-1.18-1.57-1.18-3.01s.75-2.13 1.03-2.42c.26-.3.57-.37.77-.37h.56c.18 0 .42-.1.65.5.24.6.84 2.06.92 2.22.08.14.1.26.02.43-.08.16-.1.27-.2.4-.1.14-.22.3-.31.4-.1.1-.2.2-.1.4.14.3.64 1.27 1.37 2.06.94 1 1.73 1.32 2.02 1.47.3.15.47.12.65-.08.2-.22.73-.86.93-1.15.2-.3.4-.22.65-.13.27.08 1.72.8 2.02.96.3.15.5.22.58.34.08.14.08.79-.16 1.46Z" />
                </svg>

            </a>
            {/* Email Button */}
            <a
                href="mailto:ramonbriceno12@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-500 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-600 transition"
                aria-label="Email"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                >
                    <path d="M12 13.7 1.8 6.18c-.3-.2-.7.02-.7.4v10.84c0 .56.46 1.02 1.02 1.02h17.76c.56 0 1.02-.46 1.02-1.02V6.58c0-.38-.4-.6-.7-.4L12 13.7Zm.06-1.4L21.9 5.2c.44-.28.18-.98-.3-.98H2.4c-.48 0-.74.7-.3.98L11.94 12.3c.2.14.46.14.66 0Z" />
                </svg>
            </a>

            {/* GitHub Button */}
            <a
                href="https://github.com/ramonbriceno12"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-black text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-800 transition"
                aria-label="GitHub"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                >
                    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.37 7.86 10.87.58.1.79-.25.79-.56v-2.05c-3.2.7-3.88-1.5-3.88-1.5-.53-1.37-1.3-1.73-1.3-1.73-1.06-.73.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.05 1.8 2.77 1.28 3.45.98.1-.75.41-1.28.75-1.57-2.55-.29-5.23-1.28-5.23-5.74 0-1.27.46-2.32 1.2-3.14-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.21 1.2a11.1 11.1 0 0 1 5.86 0c2.23-1.52 3.2-1.2 3.2-1.2.64 1.59.24 2.76.12 3.05.74.82 1.19 1.87 1.19 3.14 0 4.47-2.68 5.45-5.24 5.74.42.36.8 1.08.8 2.18v3.23c0 .32.2.66.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
                </svg>
            </a>
        </div>
    );
};

export default FloatingButtons;
