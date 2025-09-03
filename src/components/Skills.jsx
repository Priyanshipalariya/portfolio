import { Progress } from "./ui/Progress";
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 70 },
        { name: "Restful APIs", level: 80 },
        { name: "MySQL", level: 75 }
      ]
    },
    {
      title: "Others",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Figma", level: 80 },
        { name: "Postman", level: 85 },
        { name: "Vite", level: 80 },
        { name: "VS Code", level: 95 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 px-8 border-b border-gray-200">
      <div className=" max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Skills & Technologies</h2>
          <p className="text-md md:text-lg  max-w-5xl font-serif mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-md md:max-w-full mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className=" bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md text-center max-w-md ">
              <h3 className="text-2xl font-semibold mb-6 text-center">{category.title}</h3>
              <div className="space-y-4 max-w-xs mx-auto">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm ">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;