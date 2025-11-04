import Image from "next/image";
import Link from "next/link";
import React from "react";

const TextwithButton = ({
  customClass = "",
  text,
  btn = false,
  params = "",
  btnText = "",
  hidClass = "",
}) => {
  return (
    <>
      <div className={`${customClass} justify-between items-center w-full`}>
        <h2 className="text-[--footer] text-[48px] xl:text-[30px] font-['Lota-Bold'] ">
          {text}
        </h2>
        {btn === true && (
          <Link
            href={`/${params}/xidmetler`}
            className={`flex ${hidClass} items-center gap-[12px] bg-[--footer] py-[13px] px-[60px] text-white text-[14px]`}
          >
            <h3>{btnText}</h3>
            <span>
              <Image
                width={12}
                height={12}
                alt="btn_more"
                className="object-cover"
                src={"/btn_more.svg"}
              />
            </span>
          </Link>
        )}
      </div>
    </>
  );
};

export default TextwithButton;
