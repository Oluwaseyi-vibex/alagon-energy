import Image from "next/image";

export default function ServicesAccordion() {
  return (
    <div className="w-full my-10 md:mx-auto bg-white">
      <div className="join join-vertical w-full">
        {/* Agricultural Procurement */}
        <div className="collapse collapse-arrow rounded-none bg-white text ">
          <input type="radio" name="services-accordion" defaultChecked />
          <div className="collapse-title md:first-line:text-[40px] font-medium text-green-700">
            01 Agricultural Procurement
          </div>
          <div className="collapse-content">
            <p className="text-gray-600 md:w-[784px] mt-2">
              We source and supply high-quality agricultural products directly
              from trusted farmers. Our procurement process ensures that only
              fresh, organic, and sustainably grown produce is selected. We
              maintain strict quality control measures to guarantee the best for
              our customers. With competitive pricing, we make premium
              agricultural products affordable and accessible.{" "}
            </p>
            <div className="mt-4">
              <Image
                src="/accd1.jpg"
                alt="Agricultural Procurement"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Supply Chain Solutions */}
        <div className="collapse collapse-arrow rounded-none bg-white text ">
          <input type="radio" name="services-accordion" defaultChecked />
          <div className="collapse-title md:text-[40px] font-medium text-green-700">
            02 Equipment Supply & Solutions
          </div>
          <div className="collapse-content space-y-4">
            <p className="text-gray-600 md:w-[784px] mt-2">
              We provide high-quality agricultural, industrial, and
              food-processing equipment, ensuring businesses operate efficiently
              with modern, durable, and energy-efficient solutions.
            </p>
            <ul className="list list-item text-gray-600">
              <li className="">
                Farm Equipment – Tractors, irrigation systems, and farm tools
              </li>
              <li>
                Processing Machines – Food processing, packaging, and baking
                equipment
              </li>
              <li>
                Industrial Tools – Reliable machinery for large-scale operations
              </li>
            </ul>
            <div className="mt-4">
              <Image
                src="/accd2.jpg"
                alt="Supply Chain Solutions"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Premium Confectioneries */}
        <div className="collapse collapse-arrow rounded-none bg-white text ">
          <input type="radio" name="services-accordion" defaultChecked />
          <div className="collapse-title md:text-[40px] font-medium text-green-700">
            03 Premium Confectioneries
          </div>
          <div className="collapse-content">
            <p className="text-gray-600 mt-2">
              We create delicious, handcrafted confectioneries using only
              natural ingredients. Our products are free from artificial
              preservatives, ensuring both great taste and health benefits. By
              supporting local farmers, we use ethically sourced cocoa, dairy,
              and organic sweeteners. From chocolates to baked treats, every
              bite is a blend of tradition, quality, and nutrition.
            </p>
            <div className="mt-4">
              <Image
                src="/accd3.jpg"
                alt="Premium Confectioneries"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="collapse collapse-arrow rounded-none bg-white text ">
          <input type="radio" name="services-accordion" defaultChecked />
          <div className="collapse-title md:text-[40px] font-medium text-green-700">
            04 General Provisions & Wholesale Distribution
          </div>
          <div className="collapse-content space-y-4">
            <p className="text-gray-600 md:w-[784px] mt-2">
              We offer bulk supply of essential provisions to businesses,
              hotels, restaurants, and institutions, ensuring they receive
              premium quality products at competitive prices.
            </p>
            <ul className="list list-item text-gray-600">
              <li className="">
                Staple Foods – Rice, beans, flour, oil, and essential cooking
                ingredients{" "}
              </li>
              <li>
                Packaged Goods – Canned foods, beverages, and household supplies
              </li>
              <li>
                Wholesale Supply – Large-scale sourcing for retailers and
                businesses
              </li>
            </ul>
            <div className="mt-4">
              <Image
                src="/accd2.jpg"
                alt="Supply Chain Solutions"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
