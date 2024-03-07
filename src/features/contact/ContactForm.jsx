import { useState } from "react";
import toast from "react-hot-toast";
import Button from "../../components/Button";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      toast.error("Please make sure to fill every field in the form.", {
        duration: 6000,
      });
    } else {
      toast.success("Your message has been sent successfully!");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  }

  return (
    <div className="w-full md:basis-1/2">
      <h2 className="heading-2 mb-6">Leave a message</h2>
      <form onSubmit={(e) => handleSubmit(e)} className="space-y-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-medium ">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="dark:bg-dark-bg rounded-lg border-2 bg-white px-4 py-1 duration-200 dark:border-gray-700"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-medium ">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="dark:bg-dark-bg rounded-lg border-2 bg-white px-4 py-1 duration-200 dark:border-gray-700"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="font-medium ">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            autoComplete="on"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="dark:bg-dark-bg rounded-lg border-2 bg-white px-4 py-1 duration-200 dark:border-gray-700"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="font-medium ">
            Your message
          </label>
          <textarea
            name="message"
            id="message"
            autoComplete="on"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="dark:bg-dark-bg min-h-[120px] resize-none rounded-lg border-2 bg-white px-4 py-1 duration-200 dark:border-gray-700"
          ></textarea>
        </div>

        <Button>Send Message</Button>
      </form>
    </div>
  );
}

export default ContactForm;
