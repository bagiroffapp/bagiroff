"use client";
import { useState } from "react";
import Image from "next/image";

const OurValues = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  if (!cards || cards.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-12  items-center mt-[80px] lg:mt-[30px]">
      <div className="col-span-6 lg:col-span-12 flex flex-col justify-center order-1 lg:order-2">
        <div className="relative h-[250px] overflow-hidden bg-[#f4f6f6] ">
          {cards.map((card, index) => (
            <div
              key={card?.id}
              className="absolute top-0 left-0 w-full h-full transition-all px-[60px] lg:px-[20px] duration-700 ease-in-out flex flex-col justify-center "
              style={{
                transform: `translateX(${(index - currentIndex) * 100}%)`,
                opacity: index === currentIndex ? 1 : 0,
              }}
              aria-hidden={index !== currentIndex}
            >
              <h3 className="text-[24px] font-bold text-[--footer] mb-5">
                {card?.title}
              </h3>
              <div
                className="text-[14px] text-[--footer] "
                dangerouslySetInnerHTML={{ __html: `${card?.description}` }}
              />
            </div>
          ))}
        </div>

        <div className="flex items-center gap-8  bg-[#f4f6f6] px-[60px] pb-[20px]">
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="text-gray-700 hover:text-black transition-colors"
          >
            <span className="text-3xl">
              <Image width={20} height={20} alt="left" src={"/left.svg"} />
            </span>
            <div className="w-full h-1  mt-1"></div>
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="text-gray-700 hover:text-black transition-colors"
          >
            <span className="text-3xl">
              <Image
                width={20}
                height={20}
                alt="left"
                src={"/left.svg"}
                className="rotate-180"
              />
            </span>
            <div className="w-full h-1  mt-1"></div>
          </button>
        </div>
      </div>

      <div className="col-span-6 lg:col-span-12  relative w-full min-h-[450px] lg:min-h-[250px] order-2 lg:order-1 lg:mb-10">
        {cards.map((card, index) => (
          <div
            key={card?.id}
            className={`absolute inset-0 w-full h-full lg:h-max transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== currentIndex}
          >
            <Image
              src={card?.file}
              width={1000}
              height={400}
              alt={card?.title || "Our company values"}
              className="h-[450px] lg:h-[250px] lg:static w-[500px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurValues;
