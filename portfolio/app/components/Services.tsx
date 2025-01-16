const services = [
    {
      title: "Web Development",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-12 h-12 text-blue-500"
        >
          <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm-.003 21.6c-5.294 0-9.597-4.303-9.597-9.597 0-5.294 4.303-9.597 9.597-9.597 5.294 0 9.597 4.303 9.597 9.597 0 5.294-4.303 9.597-9.597 9.597z" />
          <path d="M7.5 12.6h9v-1.2h-9zM12 7.5a.6.6 0 100 1.2.6.6 0 000-1.2zm0 6a.6.6 0 100 1.2.6.6 0 000-1.2z" />
        </svg>
      ),
      description:
        "Build fast and responsive websites with modern frameworks like Next.js, React, and Tailwind.",
    },
    {
      title: "SEO Optimization",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-12 h-12 text-green-500"
        >
          <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm4.44 12.44-4 4a1 1 0 0 1-1.44-1.44L13.56 12l-2.56-2.56a1 1 0 1 1 1.44-1.44l4 4a1 1 0 0 1 0 1.44Z" />
        </svg>
      ),
      description:
        "Improve your website's visibility and traffic with effective SEO strategies and analytics.",
    },
    {
      title: "E-Commerce Solutions",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-12 h-12 text-yellow-500"
        >
          <path d="M21.822 7.054a1.25 1.25 0 0 0-.972-.454H6.785L6.5 4.15A2.877 2.877 0 0 0 3.656 1.5H2.5a1 1 0 1 0 0 2h1.156a.877.877 0 0 1 .865.746l1.2 7.2a1.25 1.25 0 0 0 1.217 1.054h11.142l-.406 2.437H9.575a1 1 0 1 0 0 2h6.153a2.5 2.5 0 0 0 2.461-2.07l1.126-6.754a1.25 1.25 0 0 0-.493-1.213ZM20.25 18a.75.75 0 1 1-.75.75.75.75 0 0 1 .75-.75Zm-12 0a.75.75 0 1 1-.75.75.75.75 0 0 1 .75-.75Z" />
        </svg>
      ),
      description:
        "Create scalable e-commerce platforms with WooCommerce, Shopify, or custom solutions.",
    },
  ];
  
  const Services: React.FC = () => {
    return (
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-12 lg:px-24">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            My Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition"
              >
                <div className="flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  