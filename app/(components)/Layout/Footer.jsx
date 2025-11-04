import React from "react";
import MaxWidth from "../Shared/MaxWidth/MaxWidth";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebook,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const Footer = ({
  params,
  footer_text,
  facebook,
  instagram,
  youtube,
  linkedin,
  logo,
}) => {
  const socials = [
    // {
    //   id: 1,
    //   link: facebook,
    //   icon: "/footer/facebook.svg",
    // },
    {
      id: 2,
      link: linkedin,
      icon: "/footer/linkedin.svg",
    },
    // {
    //   id: 3,
    //   link: youtube,
    //   icon: "/footer/youtube.svg",
    // },
    {
      id: 4,
      link: instagram,
      icon: "/footer/instagram.svg",
    },
  ];
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="bg-[--footer] py-[40px] ">
        <MaxWidth>
          <div className="flex items-center justify-between">
            <div>
              <Link href={`/${params}`}>
                <Image
                  width={204}
                  height={48}
                  className="object-cover lg:max-w-[120px]"
                  src={logo}
                  alt="logo footer"
                />
              </Link>
            </div>
            <div>
              <ul className="flex items-center gap-[20px]">
                {socials?.map((cur, i) => (
                  <li key={cur?.id || i}>
                    <Link
                      href={`${cur?.link}`}
                      target="_blank"
                      className="bg-[--mavi] w-[32px] h-[32px] p-[8px] rounded-[4px] flex items-center justify-center text-[15px]"
                    >
                      <Image
                        width={16}
                        height={16}
                        alt={cur?.id}
                        src={cur?.icon}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </MaxWidth>
      </div>
      <div className="bg-[--blue2] py-[12px]">
        <MaxWidth>
          <p className="text-center text-white text-[14px]">
            {footer_text} {year}
          </p>
        </MaxWidth>
      </div>
    </footer>
  );
};

export default Footer;
