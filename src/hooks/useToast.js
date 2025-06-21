import { useCallback } from "react";

export const useToast = () => {
  const showToast = useCallback((message, type = "success", duration = 3000) => {
    if (window.showToast) {
      window.showToast(message, type, duration);
    }
  }, []);

  const showSuccess = useCallback((message, duration = 3000) => {
    showToast(message, "success", duration);
  }, [showToast]);

  const showError = useCallback((message, duration = 4000) => {
    showToast(message, "error", duration);
  }, [showToast]);

  const showInfo = useCallback((message, duration = 3000) => {
    showToast(message, "info", duration);
  }, [showToast]);

  return {
    showToast,
    showSuccess,
    showError,
    showInfo
  };
}; 