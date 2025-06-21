
export const contactFormConfig = {
  action: "https://formspree.io/f/xovwnyel", 
  method: "POST",
  encType: "application/json",
  
  validation: {
    name: {
      minLength: 2,
      maxLength: 50,
      required: true
    },
    email: {
      required: true
    },
    message: {
      minLength: 10,
      maxLength: 500,
      required: true
    }
  },

  messages: {
    success: "Message sent successfully! I'll get back to you soon.",
    error: "Failed to send message. Please try again later.",
    validation: {
      name: {
        required: "Name is required",
        minLength: "Name must be at least 2 characters",
        maxLength: "Name must be less than 50 characters"
      },
      email: {
        required: "Email is required",
        invalid: "Invalid email address"
      },
      message: {
        required: "Message is required",
        minLength: "Message must be at least 10 characters",
        maxLength: "Message must be less than 500 characters"
      }
    }
  }
}; 