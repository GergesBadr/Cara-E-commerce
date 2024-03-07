import { useEffect } from "react";
import ContactBanner from "../features/contact/ContactBanner";
import ContactForm from "../features/contact/ContactForm";
import ContactInfo from "../features/contact/ContactInfo";
import AnimatedPage from "./AnimatedPage";

function Contact() {
  useEffect(() => {
    document.title = "Cara E-commerce | Contact Us";
  }, []);

  return (
    <AnimatedPage>
      <ContactBanner />
      <section className="responsive-container mt-24 flex flex-col items-start gap-10 md:flex-row">
        <ContactForm />
        <ContactInfo />
      </section>
    </AnimatedPage>
  );
}

export default Contact;
