import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0D1615] text-white pt-10 px-6">
      <div className="max-w-full md:px-[104px] mx-auto grid space-y-5 grid-cols-1 md:place-content-between md:place-items-end justify-between md:grid-cols-2 gap-">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold">Alagon Energy Resource</h2>
          <p className="mt-2 text-green-200">
            Leading in crude oil, petroleum, energy solutions, procurement, and
            sustainable agriculture.
          </p>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          {/* <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-green-400" />
            <p>123 Agriculture Lane, Lagos, Nigeria</p>
          </div> */}
          <div className="flex items-center space-x-2 mt-2">
            <FaPhone className="text-green-400" />
            <p>+234 803 789 7441</p>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <FaEnvelope className="text-green-400" />
            <p>alagonenergy@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 border-t border-green-700 pt-4 text-center text-green-300">
        <p>
          &copy; {new Date().getFullYear()} Alagon Energy Resource. All rights
          reserved.
        </p>
      </div>

      <h1 className="md:text-[22rem] text-[5rem] text-white font-semibold flex w-full items-center justify-center">
        ALAGON
      </h1>
    </footer>
  );
}
