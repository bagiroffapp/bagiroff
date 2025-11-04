import Link from "next/link";
import { IoClose } from "react-icons/io5";

const MobileMenu = ({
  data,
  mobileRef,
  closeMobileMenu,
  params,
  activePage,
}) => {
  return (
    <>
      <div
        ref={mobileRef}
        className="fixed left-0 right-0 top-[-100%] w-full h-[260px]  z-[501] transition_css1 bg-[#f4f6f6] px-[60px] py-[40px]"
      >
        <ul className="flex flex-col gap-[20px] ">
          {data?.map((cur, i) => {
            const isHomePage = cur?.slug_url === `/${params}`;
            const isActive = isHomePage
              ? activePage === cur?.slug_url
              : activePage.startsWith(cur?.slug_url);
            return (
              <li key={cur?.id || i} className="w-full ">
                <Link
                  className={`flex text-[20px] capitalize  justify-center w-full  gap-2 cursor-pointer trans hover:text-[#003B71] ${
                    isActive ? "font-['Lota-Bold'] text-[--blue]" : ""
                  }`}
                  href={`/${params}${cur?.slug_url}`}
                >
                  {cur?.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <span
          onClick={closeMobileMenu}
          className="absolute right-[30px] top-[20px] text-[30px] cursor-pointer z-40"
        >
          <IoClose />
        </span>
      </div>
    </>
  );
};

export default MobileMenu;
