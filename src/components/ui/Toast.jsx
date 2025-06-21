import { useState, useEffect } from "react";
import { IoCheckmarkCircle, IoCloseCircle, IoInformationCircle } from "react-icons/io5";

const Toast = ({ message, type = "success", duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onClose(), 300); // Wait for fade out animation
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case "success":
        return <IoCheckmarkCircle className="w-5 h-5 text-green-500" />;
      case "error":
        return <IoCloseCircle className="w-5 h-5 text-red-500" />;
      case "info":
        return <IoInformationCircle className="w-5 h-5 text-blue-500" />;
      default:
        return <IoCheckmarkCircle className="w-5 h-5 text-green-500" />;
    }
  };

  const getBgColor = () => {
    switch (type) {
      case "success":
        return "bg-green-50 border-green-200";
      case "error":
        return "bg-red-50 border-red-200";
      case "info":
        return "bg-blue-50 border-blue-200";
      default:
        return "bg-green-50 border-green-200";
    }
  };

  const getTextColor = () => {
    switch (type) {
      case "success":
        return "text-green-800";
      case "error":
        return "text-red-800";
      case "info":
        return "text-blue-800";
      default:
        return "text-green-800";
    }
  };

  return (
    <div
      className={`fixed top-4 right-4 z-50 transform transition-all duration-300 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div className={`flex items-center p-4 rounded-lg border shadow-lg ${getBgColor()}`}>
        <div className="flex-shrink-0 mr-3">
          {getIcon()}
        </div>
        <div className={`flex-1 ${getTextColor()}`}>
          <p className="text-sm font-medium">{message}</p>
        </div>
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(() => onClose(), 300);
          }}
          className="flex-shrink-0 ml-3 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <IoCloseCircle className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Toast; 