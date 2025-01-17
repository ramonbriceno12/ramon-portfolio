import {
    SiPhp,
    SiJavascript,
    SiMysql,
    SiPostgresql,
    SiSymfony,
    SiLaravel,
    SiNodedotjs,
    SiReact,
    SiNextdotjs,
    SiAmazonwebservices,
    SiPostman,
    SiCanva,
    SiGit,
    SiJira,
    SiDocker,
    SiGithub,
    SiOpenai
} from "react-icons/si";

const About: React.FC = () => {
    return (
        <section id="about" className="py-16 px-4 sm:px-6 lg:px-12 xl:px-24 mt-60">
            <div className="max-w-7xl mx-auto">
                {/* Content Grid */}
                <h2 className="text-3xl font-bold text-gray-800 mb-12">
                    Ramón Alejandro Briceño Salazar - Full Stack Developer | WordPress Specialist
                </h2>
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
                        <span className="flex items-center space-x-2">
                            <SiPhp className="w-6 h-6 text-purple-500" />
                            <strong>PHP</strong>
                        </span>
                        <span className="flex items-center space-x-2">
                            <SiJavascript className="w-6 h-6 text-yellow-500" />
                            <strong>JavaScript</strong>
                        </span>
                        <span className="flex items-center space-x-2">
                            <SiMysql className="w-6 h-6 text-blue-500" />
                            <strong>MySQL</strong>
                        </span>
                        <span className="flex items-center space-x-2">
                            <SiPostgresql className="w-6 h-6 text-blue-700" />
                            <strong>PostgreSQL</strong>
                        </span>
                        <span className="flex items-center space-x-2">
                            <SiSymfony className="w-6 h-6 text-gray-800" />
                            <strong>Symfony</strong>
                        </span>
                        <span className="flex items-center space-x-2">
                            <SiLaravel className="w-6 h-6 text-red-500" />
                            <strong>Laravel</strong>
                        </span>
                        <span className="flex items-center space-x-2">
                            <SiNodedotjs className="w-6 h-6 text-green-500" />
                            <strong>Node.js</strong>
                        </span>
                        <span className="flex items-center space-x-2">
                            <SiReact className="w-6 h-6 text-blue-500" />
                            <strong>React</strong>
                        </span>
                        <span className="flex items-center space-x-2">
                            <SiAmazonwebservices className="w-6 h-6 text-orange-500" />
                            <strong>AWS</strong>
                        </span>
                        <span className="flex items-center space-x-2">
                            <SiPostman className="w-6 h-6 text-orange-600" />
                            <strong>Postman</strong>
                        </span>
                        <span className="flex items-center space-x-2">
                            <SiCanva className="w-6 h-6 text-blue-500" />
                            <strong>Canva</strong>
                        </span>
                        <span className="flex items-center space-x-2">
                            <SiGit className="w-6 h-6 text-black" />
                            <strong>Git</strong>
                        </span>
                        <span className="flex items-center space-x-2">
                            <SiJira className="w-6 h-6 text-blue-700" />
                            <strong>Jira</strong>
                        </span>
                        <span className="flex items-center space-x-2">
                            <SiDocker className="w-6 h-6 text-blue-500" />
                            <strong>Docker</strong>
                        </span>
                    </p>
                </div>


                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column: Professional Overview */}
                    <div>

                        <h2 className="text-2xl font-bold text-gray-800 mb-6">
                            Professional Overview
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            💻 Computer Scientist with extensive experience in web development.<br />
                            🇪🇸 Native Spanish speaker,<br />
                            🇺🇸 C1 level in English.<br />

                            🌍 Experienced in international and local projects, collaborating directly with CEOs to deliver reliable products for clients worldwide.
                            <br />
                            🤖 Embracing AI to optimize and accelerate development processes, delivering smarter solutions faster.
                            <br />
                            🤝 Team player: I value collaboration and actively share ideas throughout the development process.
                            <br />
                            💡 Strong soft skills: Excellent communication, problem-solving, and adaptability, ensuring smooth collaboration and efficient project delivery.
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
