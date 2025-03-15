import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function FAQSection() {
  return (
    <section className="bg-green-800 text-white py-[50px] px-5 md:px-[104px] w-full">
      <div className="max-w-full mx-auto grid md:grid-cols-2 justify-between place-items-start">
        {/* Left Side: FAQ Heading and Button */}
        <div className="flex flex-col justify-">
          <p className="text-lg font-medium uppercase text-green-200">FAQ’s</p>
          <h2 className="text-[32px] md:text-[52px] font-bold mt-2">
            Frequently Asked <br /> Questions
          </h2>
          <p className="text-base md:text-lg text-green-200 mt-4">
            We provide innovative solutions in procurement, supply, and{" "}
            <br className="hidden md:flex" />
            confectioneries, ensuring quality and efficiency in the agricultural
            sector.
          </p>
        </div>

        {/* Right Side: FAQ Accordion */}
        <div className="w-full mt-10">
          <div className="join join-vertical w-full text-green-900">
            {/* FAQ 1 */}
            <div className="collapse collapse-arrow bg-white rounded-lg mb-2">
              <input type="radio" name="faq-accordion" defaultChecked />
              <div className="collapse-title text-lg font-semibold">
                What types of agricultural products do you procure?
              </div>
              <div className="collapse-content text-gray-700">
                <p>
                  We specialize in sourcing high-quality farm inputs, including
                  seeds, fertilizers, pesticides, and equipment to support
                  sustainable farming.
                </p>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="collapse collapse-arrow bg-white rounded-lg mb-2">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg font-semibold">
                How do you ensure the quality of procured products?
              </div>
              <div className="collapse-content text-gray-700">
                <p>
                  We partner with trusted suppliers and conduct quality checks
                  to ensure all products meet industry standards before
                  distribution.
                </p>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="collapse collapse-arrow bg-white rounded-lg mb-2">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg font-semibold">
                How do you manage delivery logistics?
              </div>
              <div className="collapse-content text-gray-700">
                <p>
                  Our efficient supply chain system ensures prompt delivery
                  through reliable transportation partners, minimizing delays.
                </p>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="collapse collapse-arrow bg-white rounded-lg mb-2">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg font-semibold">
                Are your confectionery products made with organic ingredients?
              </div>
              <div className="collapse-content text-gray-700">
                <p>
                  We prioritize organic and natural ingredients to ensure
                  healthier and high-quality products for our customers.
                </p>
              </div>
            </div>

            {/* FAQ 5 */}
            <div className="collapse collapse-arrow bg-white rounded-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg font-semibold">
                What agricultural products do you supply?
              </div>
              <div className="collapse-content text-gray-700">
                <p>
                  We supply farm produce, agrochemicals, animal feed, and other
                  essential agricultural inputs to farmers and businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
