'use client'

import { useState } from "react";
import ContactModal from "./ContactModal";

const CTA: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const toggleModal = () => setModalOpen(!isModalOpen);

    return (
        <section id="contact" className="py-16 px-6 sm:px-12 lg:px-24 bg-gray-200">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Want to Work Together?</h2>
                <p className="text-lg mb-8">Contact me for collaborations, job or projects.</p>
                <button
                    onClick={toggleModal}
                    className="bg-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
                >
                    Contact Me
                </button>
            </div>

            {/* Modal */}
            <ContactModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </section>
    );
};

export default CTA;
