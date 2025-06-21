import { FiGithub, FiLinkedin } from "react-icons/fi";
import { IoMailOutline, IoHeartOutline } from "react-icons/io5";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className=" border-t border-gray-300 px-8 ">
        {/* <div className=" flex flex-col sm:flex-row justify-between items-center py-4 max-w-7xl mx-auto">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h3 className="text-2xl font-bold mb-1 text-gray-600">Portfolio</h3>
            <p className="text-gray-700">
              Creating digital experiences that matter.
            </p>
          </div>

          <div className="flex space-x-6 text-gray-700">
            <a
              href="https://github.com/Priyanshipalariya"
              target = "_blank"
              aria-label="GitHub"
            >
              <FiGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/priyanshi-palariya-92412831b "
              target = "_blank"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              href="mailto:priyanshipalariya.work@gmail.com"
              target = "_blank"
              aria-label="Email"
            >
              <IoMailOutline size={24} />
            </a>
          </div>
        </div> */}

        <div className="border-t border-gray-300 py-4 text-center text-gray-700">
          <p className="font-semibold "> © {currentYear} Portfolio.</p>
          <p className="flex items-center justify-center gap-2 py-2">
            Made with <IoHeartOutline className="w-4 h-4 text-red-600" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;