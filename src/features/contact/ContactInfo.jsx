import {
  HiOutlineMap,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineClock,
} from "react-icons/hi2";

function ContactInfo() {
  return (
    <div className="w-full space-y-4 md:basis-1/2">
      <h2 className="heading-2">Get in touch</h2>
      <div className="flex items-center gap-4">
        <HiOutlineMap className="h-6 w-6" />
        <p className="sec-text">
          562 Wellingtion Road, Street 32. San Fransisco
        </p>
      </div>
      <div className="flex items-center gap-4">
        <HiOutlineEnvelope className="h-6 w-6" />
        <p className="sec-text">contact@example.com</p>
      </div>
      <div className="flex items-center gap-4">
        <HiOutlinePhone className="h-6 w-6" />
        <p className="sec-text">+0123456789 (+91)</p>
      </div>
      <div className="flex items-center gap-4">
        <HiOutlineClock className="h-6 w-6" />
        <p className="sec-text">Monday to Saturday: 8:00am to 6:00pm</p>
      </div>
    </div>
  );
}

export default ContactInfo;
