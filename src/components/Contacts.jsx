import { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contacts = () => {
  let form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_w2t7qqf",
        "template_dspl4aj",
        form.current,
        "9NtKoJ4AOQasnnZ7-",
      )
      .then(() => {
        alert("Message Sent Successfully");
      })
      .catch(() => {
        alert("Failed to Send");
      });
    e.target.reset();
  };
  return (
    <div id="contact" className="py-20 px-8 bg-black text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto flex flex-col gap-4"
      >
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          className="p-3 rounded bg-gray-800 outline-none"
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          className="p-3 rounded bg-gray-800 outline-none"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="p-3 rounded bg-gray-800 outline-none"
        ></textarea>
        <button className="bg-blue-500 py-3 rounded hover:bg-blue-600 transition">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contacts;
