'use client'
import { useState } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Updated Image Component */}
                <div className="relative">
                    <Image
                        src="/img/logos/logo.png" // Ensure this path points to /public/img/logos/logo.png
                        alt="logo"
                        width={140}
                        height={140}
                        priority // Load the image as a priority
                    />
                </div>
                {/* Burger Button */}
                <button
                    onClick={toggleSidebar}
                    className="text-gray-800 focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out z-40`}
            >
                {/* Close Button */}
                <button
                    onClick={toggleSidebar}
                    className="absolute top-4 right-4 text-gray-800 focus:outline-none"
                    aria-label="Close Menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <div className="mt-16 space-y-6 px-6">
                    <a href="#about" className="block text-gray-800 hover:text-blue-500">
                        About
                    </a>
                    <a href="#portfolio" className="block text-gray-800 hover:text-blue-500">
                        Portfolio
                    </a>
                    <a href="#experience" className="block text-gray-800 hover:text-blue-500">
                        Experience
                    </a>
                    <a href="#contact" className="block text-gray-800 hover:text-blue-500">
                        Contact
                    </a>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
