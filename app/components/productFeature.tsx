import Image from "next/image";

export default function ProductFeature() {
  return (
    <div className="flex flex-col md:flex-row w-full justify-center bg-white mx-auto p-4 md:p-8">
      <div className="flex flex-col justify-center lg:ml-20">
      {/* Product Image */}
      <div className="w-full md:w-1/2 relative mb-8 md:mb-0">
        <Image
          src="/product1.png" 
          alt="Product Image"
          width={300}
          height={400}
          className="rounded-lg shadow-md mx-auto md:mx-0"
        />
        {/* Benefits Box */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 md:left-1/3 md:-translate-x-0 bg-white rounded-lg shadow-md p-4 text-xs sm:text-sm max-w-[90%] md:max-w-[80%]">
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2 flex-shrink-0">✅</span> Promotes calm and relaxation.
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2 flex-shrink-0">💨</span> Inhalation allows for a rapid effect.
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 flex-shrink-0">🌱</span> 100% drug-free, plant-based ingredients.
            </li>
            <li className="flex items-start">
              <span className="text-gray-500 mr-2 flex-shrink-0">🔬</span> 3rd-party lab tested.
            </li>
          </ul>
        </div>
      </div>

      {/* Product Description */}
      <div className="w-full md:w-1/2 text-center md:text-left md:pl-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Shop Now</h2>
        <p className="text-gray-700 mb-6">
          Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. A few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed.
        </p>
        <a
          href="#"
          className="inline-block bg-red-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-red-600 transition duration-200"
        >
          Visit Shop
        </a>
      </div>
      </div>
    </div>
  );
}