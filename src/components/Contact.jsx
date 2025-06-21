import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "./ui/Button";
import { Input, TextArea} from "./ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { IoMailOutline, IoCallOutline, IoLocateOutline, IoSendOutline} from "react-icons/io5";
import { FiCode, FiGithub, FiLinkedin } from "react-icons/fi";
import { useToast } from "../hooks/useToast";
import { contactFormConfig } from "../config/formConfig";

// Validation schema using Yup
const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(contactFormConfig.validation.name.minLength, contactFormConfig.messages.validation.name.minLength)
    .max(contactFormConfig.validation.name.maxLength, contactFormConfig.messages.validation.name.maxLength)
    .required(contactFormConfig.messages.validation.name.required),
  email: Yup.string()
    .email(contactFormConfig.messages.validation.email.invalid)
    .required(contactFormConfig.messages.validation.email.required),
  message: Yup.string()
    .min(contactFormConfig.validation.message.minLength, contactFormConfig.messages.validation.message.minLength)
    .max(contactFormConfig.validation.message.maxLength, contactFormConfig.messages.validation.message.maxLength)
    .required(contactFormConfig.messages.validation.message.required),
});

const Contact = () => {
  const { showSuccess, showError } = useToast();

  const handleSubmit = async (values, { setSubmitting, resetForm, setFieldError }) => {
    console.log("Form submitted:", values);
    
    try {
      // Submit to your backend API
      const response = await fetch(contactFormConfig.action, {
        method: contactFormConfig.method,
        headers: {
          'Content-Type': contactFormConfig.encType,
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Success
      setSubmitting(false);
      resetForm();
      showSuccess(contactFormConfig.messages.success, 4000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitting(false);
      
      // Show error toast
      showError(contactFormConfig.messages.error, 4000);
      
      // Optionally set field errors
      setFieldError('email', 'Failed to send message. Please try again.');
    }
  };

  // Custom field components for Formik
  const FormikInput = ({ field, ...props }) => (
    <Input {...field} {...props} />
  );

  const FormikTextArea = ({ field, ...props }) => (
    <TextArea {...field} {...props} />
  );

  const initialValues = {
    name: "",
    email: "",
    message: ""
  };

  const contactInfo = [
    {
      icon: <IoMailOutline className="w-6 h-6" />,
      title: "Email",
      value: "priyanshipalariya.work@gmail.com",
      href: "mailto:priyapalariya.work@gmail.com"
    },
    {
      icon: <IoCallOutline className="w-6 h-6" />,
      title: "Phone",
      value: "8865876427",
      href: "tel:8865876427"
    },
    {
      icon: <IoLocateOutline className="w-6 h-6" />,
      title: "Location",
      value: "Haldwani, Uttarakhand",
      href: "https://maps.app.goo.gl/LTrCZSckKT28XKeU7"
    }
  ];

  const hubs =  [
    {
      icon: <FiGithub className="w-6 h-6" />,
      title: "GitHub",
      value: "https://github.com/Priyanshipalariya",
      href: "https://github.com/Priyanshipalariya"
    },
    {
      icon: <FiCode className="w-6 h-6" />,
      title: "LeetCode",
      value: "https://leetcode.com/u/PriyanshiPalariya/",
      href: "https://leetcode.com/u/PriyanshiPalariya/"
    },
    {
      icon: <FiLinkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "https://www.linkedin.com/in/priyanshi-palariya-92412831b ",
      href: "https://www.linkedin.com/in/priyanshi-palariya-92412831b "
    },
    
  ];

  return (
    <section id="contact" className="py-16 px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
        <p className="text-lg  max-w-5xl mx-auto font-serif">
          I'd love to hear from you. 
          Let's create something amazing together.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-16">
        <div >
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
          <div className="space-y-1 mb-4">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                target="_blank"
                className="flex items-center space-x-2 p-4 rounded-lg transition-colors duration-200"
              >
                <div >{info.icon}</div>
                <div>
                  <p className="font-medium">{info.title}</p>
                  <p>{info.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <h3 className="text-2xl font-semibold mb-6">Digital Footprints</h3>
          <div className="space-y-1 mb-4">
            {hubs.map((info, index) => (
              <a
                key={index}
                href={info.href}
                target="_blank"
                className="flex items-center space-x-2 p-4 rounded-lg transition-colors duration-200"
              >
                <div >{info.icon}</div>
                <div>
                  <p className="font-medium">{info.title}</p>
                  <p>{info.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-center py-4">Send me a message</CardTitle>
          </CardHeader>
          <CardContent>
            <Formik
              validationSchema={ContactSchema}
              onSubmit={handleSubmit}
              initialValues={initialValues}
            >
              {({ isSubmitting }) => (
                <Form 
                  className="space-y-4"
                  action={contactFormConfig.action}
                  method={contactFormConfig.method}
                  encType={contactFormConfig.encType}
                >
                  <div>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      as={FormikInput}
                      required
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      as={FormikInput}
                      required
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div>
                    <Field
                      name="message"
                      placeholder="Your Message"
                      as={FormikTextArea}
                      rows={5}
                      required
                    />
                    <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <Button type="submit" className="w-full flex items-center justify-center" disabled={isSubmitting}>
                    <IoSendOutline className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

};

export default Contact;