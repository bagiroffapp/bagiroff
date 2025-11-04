"use client";
import Section from "../../Shared/Section/Section";
import MaxWidth from "../../Shared/MaxWidth/MaxWidth";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Texts from "../../Shared/Texts/Texts";
import Link from "next/link";
import { Autoplay } from "swiper/modules";

const Partners = ({ partners, partner_text1, partner_text2 }) => {
  return (
    <Section sectionClass="mb-[80px]">
      <MaxWidth>
        <Texts text1={partner_text1} text2={partner_text2} gap="gap-[20px]" />
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          speed={1800}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 900,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          breakpoints={{
            240: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="mt-[80px]"
        >
          {partners?.map((cur) => (
            <SwiperSlide className="h-full">
              {cur?.image === null ? (
                <div className="bg-[#f4f6f6] p-[20px] flex items-center h-[150px] justify-center">
                  {cur?.link === null ? (
                    <div className="h-full flex items-center  justify-center ">
                      <div
                        className="h-full flex items-center  justify-center text-[20px]"
                        dangerouslySetInnerHTML={{ __html: `${cur?.name}` }}
                      />
                    </div>
                  ) : (
                    <Link
                      href={`${cur?.link}`}
                      className="h-full flex items-center  justify-center "
                    >
                      <div
                        className="h-full flex items-center  justify-center text-[20px]"
                        dangerouslySetInnerHTML={{ __html: `${cur?.name}` }}
                      />
                    </Link>
                  )}
                </div>
              ) : (
                <div>
                  {cur?.link === null ? (
                    <div className="bg-[#f4f6f6] p-[20px] flex items-center h-[150px] justify-center">
                      <Image
                        width={125}
                        height={114}
                        src={cur?.image}
                        alt={cur?.id}
                      />
                    </div>
                  ) : (
                    <Link
                      href={`${cur?.link}`}
                      target="_blank"
                      className="bg-[#f4f6f6] p-[20px] flex items-center h-[150px] justify-center"
                    >
                      <Image
                        width={125}
                        height={114}
                        src={cur?.image}
                        alt={cur?.id}
                      />
                    </Link>
                  )}
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </MaxWidth>
    </Section>
  );
};

export default Partners;
