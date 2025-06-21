import { FiLink, FiGithub} from "react-icons/fi";
import { Button, ButtonContrast } from "./ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/Card";


const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://res.cloudinary.com/dfelqef5x/image/upload/v1750358401/fa2hdj4ic5xafxjdbnvi.jpg",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/Priyanshipalariya/shop",
      live: ""
    },
    {
      title: "Blood Bond Platform",
description: "A web application that connects blood donors with recipients in real-time with secure user authentication, donation requests and donor registration.",
      image: "https://res.cloudinary.com/dfelqef5x/image/upload/v1750359988/plorgap2cishwdwaqzzi.jpg",
      tech: ["React", "MongoDb", "MySQL"],
      github: "https://github.com/Priyanshipalariya/blood-bond-website",
      live: "https://blood-bond.netlify.app/"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and optimized performance.",
      image: "https://res.cloudinary.com/dfelqef5x/image/upload/v1750358412/j5xliuywi2ntrupaqaeq.webp",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/Priyanshipalariya/portfolio",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-16 px-8 border-b border-gray-200">
      <div className="max-w-7xl mx-auto ">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-lg  max-w-5xl mx-auto font-serif">
            Here are some of my recent projects that showcase my skills and experience in web development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover-scale max-w-md">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardHeader className="text-center pt-3 px-3">
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className = "text-sm pt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-4 pt-1">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 border border-gray-200 shadow-md rounded-lg text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <ButtonContrast size="sm" >
                    <a href={project.github} target="_blank" className="flex items-center gap-2">
                      <FiGithub size={16} />
                      Code
                    </a>
                  </ButtonContrast>
                  <Button size="sm" asChild>
                    <a href={project.live} target="_blank" className="flex items-center gap-2">
                      <FiLink size={16} />
                      Live
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;