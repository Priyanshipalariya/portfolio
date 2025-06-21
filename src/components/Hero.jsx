import { FiGithub, FiLinkedin } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { Button, ButtonContrast } from "./ui/Button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="pt-10 flex items-center border-b border-gray-200 justify-center relative overflow-hidden border-b border-gray-200 px-8  lg:mt-10">
      {/* <div className="absolute bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div> */}

      <div className=" max-w-7xl mx-auto text-center relative z-10">
        <div className="flex flex-col lg:flex-row-reverse lg:gap-6" >
          <div className="mb-8 flex justify-center lg:w-1/3 items-center">
            <Avatar className="w-40 h-40 md:w-50 md:h-50 lg:w-70 lg:h-70 ">
              <AvatarImage
                src="https://res.cloudinary.com/dfelqef5x/image/upload/v1750356489/ssxg4htqemnmrjiokuvp.jpg"
                alt="Profile Photo"
              />
              <AvatarFallback className="text-2xl font-bold">YN</AvatarFallback>
            </Avatar>
          </div>

          <div className="lg:w-2/3">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-black via-gray-700 to-gray-400 bg-clip-text text-transparent">
              Priyanshi Palariya
            </h1>
            <p className="text-xl md:text-2xl font-bold mb-8 max-w-2xl mx-auto">
              Full Stack Developer & UI/UX Designer
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              I create beautiful, functional, and user-centered digital experiences that solve real-world problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <ButtonContrast
                size="lg"
                onClick={() => scrollToSection("#projects")}
              >
                View My Work
              </ButtonContrast>
              <Button
                size="lg"
                onClick={() => scrollToSection("#contact")}
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex justify-center space-x-6 mb-6">
              <a href="https://github.com/Priyanshipalariya"
                target="_blank"
                aria-label="GitHub">
                <FiGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/priyanshi-palariya-92412831b "
                target="_blank"
                aria-label="LinkedIn">
                <FiLinkedin size={24} />
              </a>
              <a
                href="mailto:priyanshipalariya.work@gmail.com"
                target="_blank"
                aria-label="Email">
                <IoMailOutline size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
