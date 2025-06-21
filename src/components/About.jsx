
import { FaCode , FaPalette, FaGlobe, FaDatabase, FaProjectDiagram} from "react-icons/fa";
import {  FiBarChart2 } from "react-icons/fi";


const About = () => {
  const services = [
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "Web Development",
      description: "Building responsive and performant web applications using modern technologies."
    },
    {
      icon: <FaPalette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces that provide excellent user experience."
    },
    {
        icon: <FaDatabase className="w-8 h-8" />,
        title: "Database Management",
        description: "Designing and managing relational databases using SQL and integrating them into web applications."
      },
      {
        icon: <FaProjectDiagram className="w-8 h-8" />,
        title: "Backend Development",
        description: "Developing robust and scalable server-side applications using JavaScript, Node.js, Express, and MongoDB."
      },
      
    {
      icon: <FaGlobe className="w-8 h-8" />,
      title: "SEO Optimization",
      description: "Optimizing websites for search engines to improve visibility and ranking."
    },
    {
        icon: <FiBarChart2 className="w-8 h-8" />,
        title: "Data Analysis",
        description: "Analyzing datasets using SQL and extracting insights to support data-driven decisions."
      },

      
  ];

  return (
    <section id="about" className="py-16 border-b border-gray-200 px-8 ">
      <div className="max-w-7xl mx-auto ">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-md md:text-lg max-w-5xl mx-auto font-serif">
          I'm a passionate developer eager to craft digital solutions that make an impact. I enjoy turning complex challenges into clean, user-friendly experiences, and I'm constantly exploring new technologies to grow as a developer.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md text-center transition-transform duration-200 hover:scale-105 "
            >
              <div className="text-primary mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;