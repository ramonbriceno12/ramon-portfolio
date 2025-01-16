import { SiNextdotjs, SiGithub, SiOpenai } from "react-icons/si";

const About: React.FC = () => {
    return (
        <section id="about" className="py-16 px-4 sm:px-6 lg:px-12 xl:px-24 mt-60">
            <div className="max-w-7xl mx-auto">
                {/* Top Section: Message with Icons */}
                <div className="mb-12">
                    <p className="text-lg text-gray-800 flex flex-wrap items-center justify-center gap-4">
                        <span className="flex items-center space-x-2">
                            <SiNextdotjs className="w-6 h-6 text-black" />
                            <strong>Next.js</strong>
                        </span>
                        <span className="flex items-center space-x-2">
                            <SiGithub className="w-6 h-6 text-gray-900" />
                            <strong>GitHub</strong>
                        </span>
                        <span className="flex items-center space-x-2">
                            <SiOpenai className="w-6 h-6 text-green-500" />
                            <strong>ChatGPT</strong>
                        </span>
                        <span>This site was created using continuous deployment from a Git repository.</span>
                    </p>
                </div>

                {/* Content Grid */}
                <h2 className="text-3xl font-bold text-gray-800 mb-12">
                    Ramón Alejandro Briceño Salazar - Full Stack Developer | WordPress Specialist
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column: Professional Overview */}
                    <div>

                        <h2 className="text-2xl font-bold text-gray-800 mb-6">
                            Professional Overview
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            I am a computer scientist with extensive experience in web
                            development. Fluent in Spanish (native) and English (C1 level),
                            my goal is to work on international and local projects,
                            collaborating with companies and CEOs to create reliable,
                            user-focused products for global clients.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed mt-4">
                            My expertise includes Full Stack Development, WordPress
                            solutions, API development, and SEO optimization, with a strong
                            emphasis on delivering high-quality results.
                        </p>
                    </div>

                    {/* Right Column: Technical Skills */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">
                            Technical Skills
                        </h2>
                        <ul className="space-y-4 text-lg text-gray-600">
                            <li>
                                <strong>Programming Languages:</strong> PHP, JavaScript, SQL
                            </li>
                            <li>
                                <strong>Frameworks & Libraries:</strong> Symfony, Laravel,
                                Node.js, Express, React, Next.js, React Native
                            </li>
                            <li>
                                <strong>Cloud Platforms:</strong> AWS
                            </li>
                            <li>
                                <strong>Databases:</strong> PostgreSQL, MySQL
                            </li>
                            <li>
                                <strong>Tools & Version Control:</strong> ChatGPT, Postman,
                                Canva, Git, Jira, Docker
                            </li>
                            <li>
                                <strong>Soft Skills:</strong> Creative, Organized, Time
                                Management, Team Player
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
