interface Project {
    title: string;
    link: string | null;
    description: string;
    duties: string[];
}

const projects: Project[] = [
    {
        title: "7Wayfinders (USA)",
        link: "https://7wayfinders.com/", // Add your link here
        description: "Website for a travel family.",
        duties: [
            "Designed and developed the website.",
            "Conducted SEO optimization and managed.",
        ],
    },
    {
        title: "American Family in Portugal (Portugal)",
        link: "https://americanfamilyinportugal.com/", // Add your link here
        description: "Personal blog for an American family in Portugal.",
        duties: [
            "Designed and developed the blog.",
            "Implemented SEO best practices.",
        ],
    },
    {
        title: "Syrena Swimwear (USA)",
        link: "https://syrenaswimwear.com/", // Add your link here
        description: "E-commerce platform for a swimwear brand in Florida.",
        duties: [
            "Designed and developed the website.",
            "Integrated payment gateways and configured WooCommerce for variable products.",
            "Optimized SEO and executed.",
        ],
    },
    {
        title: "I Energy (Venezuela)",
        link: "https://ienergyve.com/", // Add your link here
        description: "Corporate website for an oil company.",
        duties: [
            "Designed and developed the website.",
            "Implemented SEO strategies.",
        ],
    },
    {
        title: "The Visionist Advisers (Paris, New York, Copenhagen)",
        link: "https://www.thevisionistadvisers.com/", // Add your link here
        description: "Website for a global 360° marketing agency.",
        duties: [
            "Designed and developed the website.",
            "Conducted SEO optimization and managed.",
        ],
    },
    {
        title: "Adam Admin (Venezuela)",
        link: null,
        description: "Custom administration solution and development.",
        duties: [
            "Designed and managed database structures.",
            "Developed modules from scratch.",
            "Applied agile development methodologies.",
            "Supervised tasks and provided client support.",
        ],
    },
];


const Portfolio: React.FC = () => {
    return (
        <section id="portfolio" className="py-16 px-6 sm:px-12 lg:px-24 bg-gray-100">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">My Portfolio</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white shadow-md p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                            {project.link ? (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline mb-4 block"
                                >
                                    Visit Project
                                </a>
                            ) : (
                                <p className="text-gray-500 italic mb-4">Link not available</p>
                            )}
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <ul className="list-disc list-inside text-gray-600">
                                {project.duties.map((duty, dutyIndex) => (
                                    <li key={dutyIndex}>{duty}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
