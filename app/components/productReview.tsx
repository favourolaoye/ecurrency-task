import Image from "next/image";

export default function ProductReviews() {
  const reviews = [
    {
      text: "Works great! Just use it and then relax. I fall asleep with no problem every time I use it.",
      name: "Rachel Dill",
      rating: 5,
      imageUrl: "/phone.png", // Replace with your product image path
    },
    {
      text: "It really helps me fall right to sleep compared to melatonin pills.",
      name: "Javier Mendez",
      rating: 5,
      imageUrl: "/phone.png",
    },
    {
      text: "I have tried a lot of things to sleep but none of those worked, so I tried Cloudy and wow! I sleep like a baby now.",
      name: "Naomi Nwazurike",
      rating: 5,
      imageUrl: "/phone.png",
    },
    {
      text: "I have been falling asleep fast and sleeping through the night.",
      name: "Nate Jacobs",
      rating: 5,
      imageUrl: "/phone.png",
    },
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-white lg:ml-20">
      <h2 className="text-2xl font-bold text-blueShade text-center md:text-left mb-6 md:mb-8 md:ml-4 lg:ml-8">Product Reviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <Image
              src={review.imageUrl}
              alt={review.name}
              width={500}
              height={500}
              className="mb-4 w-full h-auto"
            />
            <p className="text-gray-700 italic mb-4 text-sm sm:text-base">{review.text}</p>
            <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{review.name}</h4>
            <div className="flex items-center justify-center">
              {Array(review.rating)
                .fill(null)
                .map((_, i) => (
                  <span key={i} className="text-green-500 text-base sm:text-lg">★</span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}