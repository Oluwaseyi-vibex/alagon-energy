"use client";

import ContactUs from "@/components/contact";
import FAQSection from "@/components/faq";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import ServicesAccordion from "@/components/ServicesAccordion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { gsap } from "gsap";

import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CertificateViewer from "@/components/certification";

gsap.registerPlugin(ScrollToPlugin, TextPlugin, ScrollTrigger);

const stats = [
  { id: 1, value: 12, label: "Years Experience" },
  { id: 2, value: 5000, label: "Farmers Empowered" },
  { id: 3, value: 25, label: "Countries Reached" },
  { id: 4, value: 500, label: "Satisfied Partners" },
];

export default function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const certRef = useRef(null);

  const scrollToCert = () => {
    gsap.to(window, {
      duration: 1,
      ease: "power2.inOut",
      scrollTo: certRef.current,
      // offset: -100,
    });
  };

  const scrollToHome = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: homeRef.current,
      ease: "power2.inOut",
    });
  };

  const scrollToAbout = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: aboutRef.current,
      ease: "power2.inOut",
    });
  };

  const scrollToServices = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: servicesRef.current,
      ease: "power2.inOut",
    });
  };

  const scrollToContact = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: contactRef.current,
      ease: "power2.inOut",
    });
  };

  const heroTextRef = useRef(null);
  useEffect(() => {
    gsap.to(heroTextRef.current, {
      duration: 3,
      text: {
        value: `Your <br/> Trusted Partner in <br/> Procurement & Supply`,
        newClass: "class2",
      },
    });
  });

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const countRefs = useRef([]);

  useEffect(() => {
    countRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: stats[index].value,
          duration: 2,
          ease: "power1.out",
          snap: { innerText: 1 }, // Ensures whole numbers
          scrollTrigger: {
            trigger: el,
            start: "top 80%", // Start animation when element enters 80% of the viewport
            once: true, // Runs animation only once
          },
        }
      );
    });
  }, []);

  return (
    <div ref={homeRef} className="w-full h-full">
      <header className="bg-[url('/HeroImage.png')] bg-no-repeat w-full h-full pb-14 bg-cover  bg-center">
        {/* <div className="w-full h-full bg-black absolute top-0 opacity-15"></div> */}
        {/* <nav className="bg-black/25 z-50 fixed  w-full backdrop-blur-md border-b border-white/50 ">
          <div className="flex w-full items-center justify-between text-white relative z-50 py-[24px] md:px-[104px]">
            <div className="md:text-xl font-extrabold">
              Alagon Energy Resources Limited
            </div>
            <ul className=" hidden  text-lg font-medium md:flex gap-8">
              <li
                onClick={scrollToHome}
                className="cursor-pointer hover:text-[#D1F349] hover:underline"
              >
                Home
              </li>
              <li
                onClick={scrollToAbout}
                className="cursor-pointer hover:text-[#D1F349] hover:underline"
              >
                About Us
              </li>
              <li
                onClick={scrollToServices}
                className="cursor-pointer hover:text-[#D1F349] hover:underline"
              >
                Services
              </li>

              <li
                onClick={scrollToCert}
                className="cursor-pointer hover:text-[#D1F349] hover:underline"
              >
                Certification
              </li>
            </ul>

            <button
              onClick={scrollToContact}
              className="w-fit py-2 px-6 border-white hover:bg-[#D1F349] hover:text-black hover:border-black ease-in transition-all duration-200 text-lg border-2 cursor-pointer rounded-full"
            >
              Contact Us
            </button>
          </div>
        </nav> */}

        <nav className="bg-black/25 z-50 fixed w-full backdrop-blur-md border-b border-white/20">
          <div className="flex w-full items-center justify-between text-white relative z-50 py-4 px-6 md:px-[104px]">
            {/* Logo */}
            <div className="text-lg md:text-xl font-extrabold">
              Alagon Energy Resources Limited
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex text-lg font-medium gap-8">
              <li
                onClick={scrollToHome}
                className="cursor-pointer hover:text-[#D1F349] hover:underline"
              >
                Home
              </li>
              <li
                onClick={scrollToAbout}
                className="cursor-pointer hover:text-[#D1F349] hover:underline"
              >
                About Us
              </li>
              <li
                onClick={scrollToServices}
                className="cursor-pointer hover:text-[#D1F349] hover:underline"
              >
                Services
              </li>
              <li
                onClick={scrollToCert}
                className="cursor-pointer hover:text-[#D1F349] hover:underline"
              >
                Certification
              </li>
            </ul>

            {/* Contact Button */}
            <button
              onClick={scrollToContact}
              className="hidden md:block py-2 px-6 border-white hover:bg-[#D1F349] hover:text-black hover:border-black ease-in transition-all duration-200 text-lg border-2 cursor-pointer rounded-full"
            >
              Contact Us
            </button>

            {/* Mobile Menu Icon */}
            <button onClick={toggleMenu} className="md:hidden text-2xl">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Menu */}
          {/* <div
            className={`md:hidden fixed top-0 right-0 w-full h-full bg-black/50 backdrop-blur-md text-white transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300`}
          >
            <ul className="flex flex-col items-center mt-[60px] py-36 space-y-8 bg-black/90 text-lg font-medium z-50 w-full border-b border-white/50">
              <li onClick={scrollToHome} className="hover:text-[#D1F349]">
                Home
              </li>
              <li onClick={scrollToAbout} className="hover:text-[#D1F349]">
                About Us
              </li>
              <li onClick={scrollToServices} className="hover:text-[#D1F349]">
                Services
              </li>
              <li onClick={scrollToCert} className="hover:text-[#D1F349]">
                Certification
              </li>
              <li>
                <button
                  onClick={scrollToContact}
                  className="mt-4 py-2 px-6 border-white hover:bg-[#D1F349] hover:text-black hover:border-black transition-all duration-200 text-lg border-2 cursor-pointer rounded-full"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div> */}
          <div
            className={`md:hidden fixed top-0 right-0 w-full h-full  text-white transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300`}
          >
            <ul className="flex flex-col items-center mt-[60px] py-36 space-y-8  bg-black/95 text-lg font-medium z-50 w-full border-b border-white/50">
              <li
                onClick={scrollToHome}
                className="hover:text-white text-[#D1F349]"
              >
                Home
              </li>
              <li
                onClick={scrollToAbout}
                className="hover:text-white text-[#D1F349]"
              >
                About Us
              </li>
              <li
                onClick={scrollToServices}
                className="hover:text-white text-[#D1F349]"
              >
                Services
              </li>
              <li
                onClick={scrollToCert}
                className="hover:text-white text-[#D1F349]"
              >
                Certification
              </li>
              <li>
                <button
                  onClick={scrollToContact}
                  className="mt-4 py-2 px-6 border-white hover:bg-[#D1F349] hover:text-black hover:border-black transition-all duration-200 text-lg border-2 cursor-pointer rounded-full"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </nav>

        <div className="md:px-[104px] px-5 pt-[130px] space-y-4">
          <button className="bg-[#D1F349] text-[#1E2238] text-xl absolute border-2 border-black rotate-12 md:right-[850px] right-16 top-36 flex items-center justify-center gap-6 font-semibold rounded-full md:py-3 pl-5 pr-8">
            #AgriTech
          </button>
          <h1
            ref={heroTextRef}
            className="md:text-[88px] text-[40px]  text-white font-semibold"
          >
            Alagon <br /> Energy Resources <br /> Limited
            {/* Bridging <br /> Agriculture & Business <br /> with Excellence! */}
          </h1>
          <div className="text-white text-xl space-y-8 font-light">
            <button className="bg-[#D1F349] text-[#1E2238] text-xl absolute border-2 border-black -rotate-6 md:right-[500px] right-[50px] md:top-[512px] top-[350px] flex items-center justify-center gap-6 font-semibold rounded-full py-1 md:py-4 pl-5 pr-8">
              #Experienced
            </button>
            <p>
              Delivering quality confectioneries, equipment, and essential
              provisions with excellence.
            </p>
          </div>
          <button
            onClick={scrollToServices}
            className="bg-[#D1F349] text-[#1E2238] text-lg flex items-center justify-center gap-6 font-semibold rounded-full py-3 pl-5 pr-3"
          >
            Explore Our Services
            <Image
              src={"/arrowright.png"}
              width={500}
              height={500}
              alt="right"
              className="w-[35px] h-[35px]"
            />
          </button>
        </div>

        <div className="flex px-4 justify-end my-12 text-sm text-white">
          <div className="md:pr-14 space-y-5">
            <div className="flex gap-5">
              <div className="bg-white/10 flex items-center justify-center backdrop-blur-md  border-white/50 rounded-full px-5 md:py-2 ">
                AgriTech
              </div>

              <div className="bg-white/10 backdrop-blur-md flex items-center justify-center  border-white/50 rounded-full px-5 py-2 ">
                Eco-Friendly
              </div>

              <div className="bg-white/10 backdrop-blur-md flex items-center justify-center  border-white/50 rounded-full px-5 py-2 ">
                Equipments
              </div>
            </div>
            <div className="flex gap-5">
              <div className="bg-white/10 backdrop-blur-md flex items-center justify-center  border-white/50 rounded-full px-5 py-2 ">
                Efficient Agricultural Procurement
              </div>

              <div className="bg-white/10 backdrop-blur-md flex items-center justify-center  border-white/50 rounded-full px-5 py-2 ">
                Sustainable Supply Chain
              </div>
            </div>
            <div className="flex gap-5">
              <div className="bg-white/10 backdrop-blur-md flex items-center justify-center  border-white/50 rounded-full px-5 py-2 ">
                Soil Health & Quality Assurance{" "}
              </div>

              <div className="bg-white/10 backdrop-blur-md flex items-center justify-center  border-white/50 rounded-full px-5 py-2 ">
                Organic & Natural Ingredients{" "}
              </div>
            </div>
            <div className="flex gap-5">
              <div className="bg-white/10 backdrop-blur-md flex items-center justify-center  border-white/50 rounded-full px-5 py-2 ">
                Farm-to-Table Confectioneries
              </div>

              <div className="bg-white/10 backdrop-blur-md flex items-center justify-center  border-white/50 rounded-full px-5 py-2 ">
                Provisions
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center text-white gap-4 justify-center">
          <Image
            src={"/ScrollIcon.png"}
            width={100}
            height={100}
            alt="right"
            className="md:w-[1.5%] w-[3%]"
          />
          SCROLL DOWN
        </div>
      </header>

      <div ref={aboutRef}>
        <div className="bg-white px-5 md:px-[104px] py-[50px] md:py-[100px]">
          <div className="flex md:flex-row flex-col justify-between">
            <p className="text-[#1D5B37] text-sm md:text-xl">Connect With Us</p>

            <div className="md:w-[784px] my-6 space-y-7 ">
              <div className="space-y-4">
                <h1 className="md:text-[52px] text-[32px] text-black font-medium">
                  Who We Are
                </h1>
                <p className="text-[#667085] text-base md:text-xl">
                  Alagon Energy Resource is an agritech-driven company
                  specializing in procurement, supply, equipment, provisions,
                  and confectioneries. We bridge the gap between farmers,
                  suppliers, and businesses, providing high-quality products and
                  solutions that drive sustainability, efficiency, and
                  innovation in the agricultural and food industries.
                </p>
                <p className="text-[#667085] text-base md:text-xl">
                  We are committed to eco-friendly sourcing, optimized
                  logistics, and cutting-edge technology to enhance productivity
                  and ensure seamless access to essential goods.
                </p>
              </div>

              <div className="space-y-4">
                <h1 className="md:text-[52px] text-[32px] text-black font-medium">
                  Our Mission & Vision
                </h1>
                <p className="text-[#667085] text-base md:text-xl">
                  <span className="font-semibold text-black">Mission:</span> To
                  redefine procurement, equipment supply, provisions, and food
                  production through sustainable practices and cutting-edge
                  agritech solutions, ensuring high-quality products with
                  minimal environmental impact.
                </p>

                <p className="text-[#667085] text-base md:text-xl">
                  <span className="font-semibold text-black">Vision:</span> To
                  become a leading agritech company, enhancing productivity and
                  sustainability in agriculture through precision farming and
                  eco-friendly solutions.
                </p>
              </div>

              <div>
                <h1 className="md:text-[52px] text-[32px] text-black font-medium">
                  Why Choose Us?
                </h1>
                <ul>
                  <li className="text-[#667085] text-base md:text-xl pt-4">
                    Reliable Procurement – We source the best agricultural,
                    industrial, and food products.
                  </li>

                  <li className="text-[#667085] text-base md:text-xl pt-4">
                    Efficient Supply Chain – Timely delivery, minimal waste, and
                    optimized logistics.
                  </li>

                  <li className="text-[#667085] text-base md:text-xl pt-4">
                    Sustainable Practices – Commitment to eco-friendly farming
                    and production.
                  </li>

                  <li className="text-[#667085] text-base md:text-xl pt-4">
                    Premium Equipment – Durable and modern solutions for
                    agriculture and food processing.
                  </li>

                  <li className="text-[#667085] text-base md:text-xl pt-4">
                    Premium Confectioneries – Made with high-quality, natural
                    ingredients.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex gap-2 mt-[0px] md:mt-[100px]">
            <Image
              src={"/about1.png"}
              width={1000}
              height={1000}
              alt="right"
              className="w-[50%]"
            />

            <Image
              src={"/about2.png"}
              width={1000}
              height={1000}
              alt="right"
              className="w-[50%]"
            />
          </div>
        </div>
      </div>

      <div className="px-6 md:px-[104px] bg-[#1D5B37] py-10 md:py-[40px] grid grid-cols-2 md:flex md:flex-row items-center justify-between gap-8 md:gap-0">
        {stats.map((stat, index) => (
          <div
            key={stat.id}
            className="flex flex-col items-center gap-2 md:gap-4"
          >
            <h1
              ref={(el) => (countRefs.current[index] = el)}
              className="text-[40px] md:text-[64px] text-white font-medium"
            >
              0 +
            </h1>
            <p className="text-[#EAECF0] text-lg md:text-xl text-center">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div
        ref={servicesRef}
        className="bg-white px-5 md:px-[104px] py-[50px] md:py-[100px]"
      >
        <div className="flex md:flex-row flex-col space-y-4 justify-between">
          <h1 className="text-[#1D5B37] text-xl">Our Service</h1>

          <div className="md:w-[784px] space-y-7 ">
            <div className="space-y-4">
              <h1 className="md:text-[52px] text-[32px] text-black font-medium">
                Transforming Agriculture, One Solution at a Time
              </h1>
              <p className="text-[#667085] text-base md:text-xl">
                Alagon Energy Resource is a leading agritech-driven company
                focused on procurement, supply, and confectioneries. We connect
                farmers, suppliers, and businesses through sustainable and
                efficient agricultural solutions. Our goal is to revolutionize
                the agricultural sector with eco-friendly and innovative
                practices.
              </p>
            </div>
          </div>
        </div>

        <ServicesAccordion />
      </div>

      <FAQSection />

      <div ref={certRef}>
        <CertificateViewer />
      </div>

      <div ref={contactRef}>
        <ContactUs />
      </div>

      <Footer />
    </div>
  );
}
