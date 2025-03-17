import Image from "next/image";

export default function ServicesAccordion() {
  return (
    <div className="w-full my-10 md:mx-auto bg-white">
      <div className="join join-vertical w-full">
        {/* Agricultural Procurement */}
        <div className="collapse collapse-arrow rounded-none bg-white text">
          <input type="radio" name="services-accordion" defaultChecked />
          <div className="collapse-title text-lg md:text-[40px] font-medium text-green-700">
            01 Agricultural Procurement
          </div>
          <div className="collapse-content">
            <p className="text-gray-600 md:w-[784px] mt-2">
              We source and supply high-quality agricultural products directly
              from trusted farmers. Our procurement process ensures that only
              fresh, organic, and sustainably grown produce is selected. We
              maintain strict quality control measures to guarantee the best for
              our customers.
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

        {/* Equipment Supply & Solutions */}
        <div className="collapse collapse-arrow rounded-none bg-white text">
          <input type="radio" name="services-accordion" />
          <div className="collapse-title text-lg md:text-[40px] font-medium text-green-700">
            02 Equipment Supply & Solutions
          </div>
          <div className="collapse-content space-y-4">
            <p className="text-gray-600 md:w-[784px] mt-2">
              We provide high-quality agricultural, industrial, and
              food-processing equipment, ensuring businesses operate efficiently
              with modern, durable, and energy-efficient solutions.
            </p>
            <ul className="list list-item text-gray-600">
              <li>
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
                alt="Equipment Supply"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Premium Confectioneries */}
        <div className="collapse collapse-arrow rounded-none bg-white text">
          <input type="radio" name="services-accordion" />
          <div className="collapse-title text-lg md:text-[40px] font-medium text-green-700">
            03 Premium Confectioneries
          </div>
          <div className="collapse-content">
            <p className="text-gray-600 md:w-[784px] mt-2">
              We create delicious, handcrafted confectioneries using only
              natural ingredients. Our products are free from artificial
              preservatives, ensuring both great taste and health benefits.
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

        {/* Oil & Gas Supply and Exportation */}
        <div className="collapse collapse-arrow rounded-none bg-white text">
          <input type="radio" name="services-accordion" />
          <div className="collapse-title text-lg md:text-[40px] font-medium text-green-700">
            04 Oil & Gas Supply and Exportation
          </div>
          <div className="collapse-content">
            <p className="text-gray-600 md:w-[784px] mt-2">
              We engage in the lifting and exportation of crude oil, gasoline,
              diesel, aviation fuel, and renewable energy products. We ensure
              safe and efficient transportation via tankers and pipelines.
            </p>
            <div className="mt-4">
              <Image
                src="/accd4.jpg"
                alt="Oil & Gas Export"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Renewable Energy Solutions */}
        <div className="collapse collapse-arrow rounded-none bg-white text">
          <input type="radio" name="services-accordion" />
          <div className="collapse-title text-lg md:text-[40px] font-medium text-green-700">
            05 Renewable Energy Solutions
          </div>
          <div className="collapse-content">
            <p className="text-gray-600 md:w-[784px] mt-2">
              We specialize in solar energy solutions, including solar panel
              supply, installation, and maintenance. Our services extend to
              energy-efficient designs and equipment sourcing.
            </p>
            <div className="mt-4">
              <Image
                src="/accd5.jpg"
                alt="Renewable Energy"
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
