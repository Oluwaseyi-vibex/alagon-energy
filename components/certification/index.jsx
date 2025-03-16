import Image from "next/image";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function CertificateViewer() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section className="flex flex-col bg-green-900 items-center justify-center py-12 px-6">
      {/* Heading & Subheading */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-white">Our Certification</h2>
        <p className="text-white mt-2">
          Recognized for excellence in agricultural procurement, supply, and
          confectioneries.
        </p>
      </div>

      {/* Certificate Container */}
      <div className="relative w-full max-w-lg h-full overflow-hidden rounded-lg shadow-lg">
        {/* Certificate Image */}
        <Image
          width={1000}
          height={1000}
          src="/certificate.jpeg" // Change to actual image path
          alt="Certificate"
          className={`w-full md:h-[700px] h-[500px] object-cover transition-all duration-500 ${
            isVisible ? "blur-0" : "blur-md"
          }`}
        />

        {/* View Image Button */}
        {!isVisible && (
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white font-semibold text-lg hover:bg-opacity-70 transition-all"
          >
            <FaEye className="mr-2" /> View Certificate
          </button>
        )}
      </div>
    </section>
  );
}
