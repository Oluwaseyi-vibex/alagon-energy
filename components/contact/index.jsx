"use client";

import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);

    const templateParams = {
      user_name: data.name,
      user_email: data.email,
      message: data.message,
    };

    try {
      await emailjs.send(
        "service_f7tcwr8", // Replace with your EmailJS Service ID
        "template_ioe8pt9", // Replace with your EmailJS Template ID
        templateParams,
        "Mg9JmfrGC-sCnSMqJ" // Replace with your EmailJS Public Key
      );

      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Try again.");
    }

    setIsLoading(false);
  };

  return (
    <div className="bg-green-900 bg-[url('/contactBackgroundImage.png')] bg-center bg-cover bg-no-repeat text-white py-24 px-6 md:px-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="md:text-6xl text-4xl font-bold mt-2">Get in Touch</h1>
        <p className="md:text-lg text-base mt-4 text-green-200">
          Have questions or need assistance? Reach out to us, and we'll be happy
          to help!
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-green-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              {...register("name", { required: "Full Name is required" })}
              className="input input-bordered w-full bg-white text-black"
            />
            {errors.name && (
              <p className="text-red-400">{errors.name.message}</p>
            )}

            <input
              type="email"
              placeholder="Email Address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              className="input input-bordered w-full bg-white text-black"
            />
            {errors.email && (
              <p className="text-red-400">{errors.email.message}</p>
            )}

            <textarea
              placeholder="Your Message"
              {...register("message", { required: "Message is required" })}
              className="textarea textarea-bordered w-full bg-white text-black"
              rows="4"
            ></textarea>
            {errors.message && (
              <p className="text-red-400">{errors.message.message}</p>
            )}

            <button
              type="submit"
              className="btn  w-full bg-green-600 border-none hover:bg-green-500"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="bg-green-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-green-200">
            Feel free to reach out through any of the channels below.
          </p>
          <div className="mt-6 space-y-4">
            {/* <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-green-400 text-2xl" />
              <p>123 Agriculture Lane, Lagos, Nigeria</p>
            </div> */}
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-green-400 text-2xl" />
              <p>+234 80 37 897 441</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-green-400 text-2xl" />
              <p>alagonenergy@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
