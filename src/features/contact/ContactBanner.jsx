function ContactBanner() {
  return (
    <section
      className="flex h-[350px] flex-col items-center justify-center gap-6
    bg-[url('./assets/banners/contact.png')] bg-cover bg-top bg-no-repeat px-6 text-center text-white"
    >
      <h1 className="heading-1">#let&apos;s_talk</h1>
      <p className="text-lg text-gray-300">
        Leave a message, We love to hear from you!
      </p>
    </section>
  );
}

export default ContactBanner;
