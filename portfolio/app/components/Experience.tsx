interface Experience {
    role: string;
    technologies: string;
    company: string;
    dateRange: string;
    clients?: string[]; // Optional: Include clients for relevant roles
    responsibilities: string[];
  }
  
  const experiences: Experience[] = [
    {
      role: "Tech Lead",
      technologies: "PHP | MySQL | Node.js | AWS | WordPress",
      company: "Kajae LLC. (USA)",
      dateRange: "Jan 2024 – Present",
      clients: ["Stroudinc", "American Family In Portugal", "7wayfinders"],
      responsibilities: [
        "Maintenance of AWS EC2 servers.",
        "Development and customization of WordPress sites.",
        "Integrations and feature improvements.",
      ],
    },
    {
      role: "Back-End Developer",
      technologies: "PHP | MySQL | Node.js | AWS",
      company: "TagWizz (Mexico)",
      dateRange: "Jun 2022 – Oct 2023",
      responsibilities: [
        "Designed databases.",
        "Developed APIs.",
        "Created AWS Lambda functions for microservices.",
        "Configured API Gateway endpoints in AWS.",
        "Applied agile software development practices.",
      ],
    },
    {
      role: "WordPress Developer",
      technologies: "WooCommerce",
      company: "Syrena Swimwear (USA)",
      dateRange: "Aug 2019 – Apr 2020",
      responsibilities: [
        "Designed and customized an e-commerce website.",
        "Integrated payment gateways and managed variable products.",
        "Installed and configured plugins for enhanced functionality.",
        "Optimized SEO for improved search visibility.",
      ],
    },
    {
      role: "Full Stack Developer",
      technologies: "PHP | JavaScript | PostgreSQL",
      company: "DORA (Ecuador)",
      dateRange: "Sep 2017 – May 2022",
      responsibilities: [
        "Developed new functionalities and API improvements.",
        "Conducted QA for new developments.",
        "Collaborated with support teams and clients for feedback.",
        "Resolved system errors and implemented enhancements.",
        "Executed tasks assigned by the project manager.",
      ],
    },
  ];
  
  const Experience: React.FC = () => {
    return (
      <section id="experience" className="py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Professional Experience
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {experiences.map((experience, index) => (
              <div key={index} className="bg-white shadow-md p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {experience.role}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{experience.technologies}</p>
                <p className="text-sm text-gray-500 mb-4">
                  {experience.company} <br />
                  {experience.dateRange}
                </p>
                {experience.clients && (
                  <div className="mb-4">
                    <strong>Clients:</strong>
                    <ul className="list-disc list-inside text-gray-600">
                      {experience.clients.map((client, clientIndex) => (
                        <ol key={clientIndex}>{client}</ol>
                      ))}
                    </ul>
                  </div>
                )}
                <ul className="list-disc list-inside text-gray-600">
                  {experience.responsibilities.map((responsibility, resIndex) => (
                    <li key={resIndex}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Experience;
  