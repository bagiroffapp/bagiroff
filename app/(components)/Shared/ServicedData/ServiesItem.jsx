import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiesItem = ({ item, readMore, params, customClass = "bg-[#fff]" }) => {
  return (
    <li
      className={`flex flex-col ${customClass} p-[40px] lg:p-[20px] h-full justify-between relative hover:bg-[--mavi] transition_css group services_item`}
    >
      {item?.title && (
        <Link
          href={`/${params}/xidmetler/${item?.id}/${item?.slug}`}
          className="text-black font-['Lota-Bold'] relative z-[50] text-[24px] lg:text-[18px] mb-[20px] transition_css group-hover:text-[#fff]"
        >
          {item?.title}
        </Link>
      )}
      {item?.text && (
        <div
          className="text-[#011E41] text-[14px] group-hover:text-[#fff] mb-[60px] line-clamp-3"
          dangerouslySetInnerHTML={{ __html: `${item?.text}` }}
        />
      )}
      {readMore && (
        <Link
          href={`/${params}/xidmetler/${item?.id}/${item?.slug}`}
          className="flex items-center relative z-[50] text-[16px] text-[--blue2] gap-[12px] group-hover:text-[#fff]"
        >
          <h3>{readMore}</h3>
          <span className="read_more">
            <Image
              width={10}
              height={10}
              className="object-cover"
              src={"/read_more_white.svg"}
              alt={item?.text}
            />
          </span>
        </Link>
      )}
      <span className="absolute top-0 left-[-30px] w-full h-full">
        <Image
          width={298}
          height={298}
          className="object-contain h-full w-full"
          alt="linear"
          src={"/xidmet.png"}
        />
      </span>
    </li>
  );
};

export default ServiesItem;
