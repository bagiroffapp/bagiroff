"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Image from "next/image";

const Slider = ({ data }) => {
  return (
    <div>
      <Swiper className="mySwiper">
        {data?.map((cur, i) => (
          <SwiperSlide key={cur?.id || i}>
            <div className="relative">
              <img
                width={1000}
                height={720}
                className="object-cover w-full h-[720px] xl:h-[450px] md:h-[350px]"
                src={`${process.env.NEXT_PUBLIC_PICTURE}/${cur?.cover}`}
                alt={cur?.title || "slider"}
              />
              <Image fill src={"/linear.png"} alt="linear" />

              {cur?.title && (
                <div
                  className="absolute top-[50%] left-[50%] text-center translate-x-[-50%] translate-y-[-50%] 
              z-[400] text-white font-['Lota-Bold'] text-[80px] xl:text-[50px] lg:text-[35px] w-full md:text-[25px]"
                  dangerouslySetInnerHTML={{ __html: `${cur?.title}` }}
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
