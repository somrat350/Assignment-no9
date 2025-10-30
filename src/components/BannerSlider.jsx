import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    title: "Three Adorable Fluffy Kittens with Bright Blue Eyes 🐾",
    image: "/slide1.jpg",
    description: "Three fluffy white kittens with blue eyes cuddle together, showing their tiny pink paws in a cozy embrace.",
  },
  {
    id: 2,
    title: "Paw PrAdorable Trio of Guinea Pigs Munching on Fresh Grass",
    image: "/slide2.jpg",
    description: "Three fluffy guinea pigs in varied colors joyfully nibble long green grass blades on a sunny lawn.",
  },
  {
    id: 3,
    title: "Cozy Shih Tzu Puppy Snuggled in Mother's Warm Embrace",
    image: "/slide3.jpg",
    description: "Adorable fluffy Shih Tzu puppy rests peacefully in a teal sweater, held lovingly by smiling bespectacled mother outdoors.",
  },
];

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  return (
    <div data-aos="zoom-in" className="relative w-full h-[80vh] overflow-hidden rounded-2xl">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 text-balance">
              {slide.title}
            </h1>
            <p className="text-base md:text-xl text-white/90">
              {slide.description}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black cursor-pointer text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black cursor-pointer text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <FaChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === current ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
