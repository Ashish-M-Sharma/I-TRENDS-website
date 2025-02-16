import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Map = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5133w3o",
        "template_tr6bgal",
        form.current,
        "BcqI3hALaR7qyl1Ow"
      )
      .then(
        (result) => {
          toast.success("Message Sent Successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          console.log(error.text);
        }
      );
  };

  return (
    <div className="w-full bg-[#FEC1B2] flex flex-col md:flex-row justify-between items-center gap-8 md:px-20 md:py-14 md:my-18">
      <ToastContainer /> {/* Toast container added here */}
      <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center gap-3">
        <h2 className="text-[28px] md:text-[32px] font-[700] leading-[36px] text-[#B14359]">
          📩 Contact Us
        </h2>
        <p className="text-[16px] md:text-[18px] font-[400] leading-[24px] text-[#A56383]">
          Have a question or need assistance? Drop us a message and we'll get
          back to you soon!
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-3 mt-4"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B14359]"
          />
          <input
            type="tel"
            name="user_mobile"
            placeholder="Mobile Number"
            required
            className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B14359]"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B14359] resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-[#B14359] text-white font-bold py-2 px-4 rounded-md hover:bg-[#922d44] transition-all cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6843.413878489014!2d73.90327846977537!3d18.6141552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c700594eff49%3A0x4978255b63aab10e!2si-trends!5e1!3m2!1sen!2sin!4v1739639080651!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full max-w-[750px] h-[300px] md:h-[400px] border-0 rounded-lg shadow-xl"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
