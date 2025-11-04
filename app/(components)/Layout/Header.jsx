"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import MaxWidth from "../Shared/MaxWidth/MaxWidth";
import { usePathname } from "next/navigation";
import Grid from "../Shared/Grid/Grid";
import GridSpan from "../Shared/Grid/GridSpan";
import Link from "next/link";
import Image from "next/image";
import Lang from "./Lang";
import { CiMenuFries } from "react-icons/ci";
import MobileMenu from "./MobileMenu";
import SearchComponent from "../Shared/SearchComponent/SearchComponent";

const Header = ({ params, menu, netice }) => {
  const [scrolledFromTop, setScrollTop] = useState(false);
  const activePage = usePathname();
  const [open, setOpen] = useState(false);
  const searchInputRef = useRef();
  const overlayDiv = useRef();
  const mobileRef = useRef();
  const searchRef = useRef();

  useEffect(() => {
    const scrollHandler = () => {
      if (typeof window !== "undefined") {
        window.pageYOffset >= 50 ? setScrollTop(true) : setScrollTop(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", scrollHandler);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", scrollHandler);
      }
    };
  }, []);

  //language
  let language;
  if (typeof window !== "undefined") {
    language = localStorage.getItem("bagiroff");
  }

  const langSwitcher = async () => {
    setOpen(false);
  };
  const langs = ["az", "en"];

  const langChecker = useCallback((lang = "az") => {
    if (typeof localStorage !== "undefined") {
      return lang !== localStorage.getItem("bagiroff");
    }
  }, []);

  const myLang = langs?.filter(langChecker);

  function openSearch() {
    const serach = searchRef?.current?.classList;
    if (serach.contains("hidden_search")) {
      serach?.replace("hidden_search", "show_search");
    }
    setTimeout(() => {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }, 100);
  }

  function openMobileMenu() {
    const mobile = mobileRef?.current?.classList;
    if (mobile.contains("top-[-100%]")) {
      mobile?.replace("top-[-100%]", "top-0");
      overlayDiv?.current?.classList?.add("active");
    }
  }

  function closeMobileMenu() {
    const mobile = mobileRef?.current?.classList;
    if (mobile.contains("top-0")) {
      mobile?.replace("top-0", "top-[-100%]");
      overlayDiv?.current?.classList?.remove("active");
    }
  }

  const closeAll = () => {
    closeSearch();
    closeMobileMenu();
  };

  const [searchInput, setSearchInput] = useState("");
  const [xidmetler, setXidmetler] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const toLowerCase = searchInput.toLocaleLowerCase();
    if (searchInput && searchInput.trim() !== "") {
      setLoading(true);
      const delay = setTimeout(() => {
        fetch(
          `${process.env.NEXT_PUBLIC_MAIN_URL}/${params}/search?q=${toLowerCase}`
        )
          .then((res) => res.json())
          .then((data) => {
            setXidmetler(data?.xidmetler);
          })
          .finally(() => setLoading(false));
      }, 1000);

      return () => clearTimeout(delay);
    } else {
      setLoading(false);

      setXidmetler([]);
    }
  }, [searchInput]);

  function closeSearch() {
    const serach = searchRef?.current?.classList;
    if (serach.contains("show_search")) {
      serach?.replace("show_search", "hidden_search");
    }
    setSearchInput("");
  }

  return (
    <>
      <div
        onClick={closeAll}
        ref={overlayDiv}
        className="mobile-menu-overlay overflow-x-hidden block fixed left-0 top-0 bottom-0 right-0 z-[500] overlay "
      />
      <header
        className={`fixed top-0 left-0 right-0 z-[400] bg-[#f4f6f6] transition_css  ${
          scrolledFromTop
            ? "py-[20px] xl:py-[20px] lg:py-[10px] box-css"
            : "py-[40px] xl:py-[20px] lg:py-[10px]"
        }`}
      >
        <MaxWidth>
          <Grid gridClass="flex items-center justify-between">
            <GridSpan gridSpan="col-span-2 ">
              <Link href={`/${params}`}>
                <Image
                  alt="logo"
                  src={"/logo.svg"}
                  width={204}
                  height={48}
                  className="lg:max-w-[130px] md:max-w-[100px]"
                />
              </Link>
            </GridSpan>
            <GridSpan gridSpan={`col-span-8 lg:hidden`}>
              <ul className="flex gap-[32px] items-center justify-center h-full">
                {menu?.map((item, i) => {
                  const isHomePage = item?.slug_url === `/`;
                  const isActive = isHomePage
                    ? activePage === `${item?.slug_url}`
                    : activePage.startsWith(`/${params}${item?.slug_url}`);

                  return (
                    <li key={item?.id || i}>
                      <Link
                        href={`/${params}${item?.slug_url}`}
                        className={`text-[16px] transition-all duration-300 hover:text-[--blue] hover:font-['Lota-Bold'] ${
                          isActive ? "font-['Lota-Bold'] text-[--blue]" : ""
                        }`}
                      >
                        {item?.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </GridSpan>

            <GridSpan gridSpan={`col-span-2 `}>
              <div className="flex  justify-end ">
                <div className="flex gap-6">
                  <span
                    onClick={openSearch}
                    className="bg-[#eaeded]   flex items-center cursor-pointer justify-center p-[12px] lg:py-[6px] lg:px-[12px]"
                  >
                    <Image
                      src="/search.svg"
                      alt="search"
                      width={20}
                      height={20}
                      className="w-[20px] lg:w-[15px]"
                    />
                  </span>
                  <div className="bg-[#eaeded] px-[19px] lg:px-[10px] py-[7px]  flex items-center justify-center">
                    <Lang
                      toggle={() => setOpen(!open)}
                      langs={langs}
                      scrolledFromTop={scrolledFromTop}
                      switchLang={
                        open && (
                          <div className="absolute cursor-pointer  mt-6 right-[10px] top-6 h-[50px] flex flex-col text-left items-center justify-center">
                            {myLang?.map((lang, index) => (
                              <button
                                className="text-[--text] z-[200] capitalize text-[18px] xl:text-[13px] transitions  overflow-hidden px-6 py-1 rounded-lg bg-white-A700   "
                                key={index}
                                onClick={() => langSwitcher(lang)}
                              >
                                {lang}
                              </button>
                            ))}
                          </div>
                        )
                      }
                    />
                  </div>
                </div>
                <button
                  onClick={openMobileMenu}
                  className="bg-[#eaeded] hidden ml-[15px]  text-[20px] lg:flex items-center cursor-pointer justify-center p-[12px] lg:py-[6px] lg:px-[12px]"
                >
                  <CiMenuFries />
                </button>
              </div>
            </GridSpan>
          </Grid>
        </MaxWidth>
      </header>
      <MobileMenu
        data={menu}
        params={params}
        overlayDiv={overlayDiv}
        mobileRef={mobileRef}
        activePage={activePage}
        closeMobileMenu={closeMobileMenu}
      />
      <SearchComponent
        searchRef={searchRef}
        close={closeSearch}
        xidmetler={xidmetler}
        loading={loading}
        params={params}
        inputValue={searchInput}
        setSearchInput={setSearchInput}
        notFound={!xidmetler?.results}
        searchInputRef={searchInputRef}
        netice={netice}
      />
    </>
  );
};

export default Header;
