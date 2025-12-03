import Link from "next/link";

import { IoCloseOutline } from "react-icons/io5";

import MaxWidth from "../MaxWidth/MaxWidth";
import SearchSpinner from "../SearchSpinner/SearchSpinner";

const SearchComponent = ({
  searchRef,
  close,
  xidmetler,
  loading,
  params,
  searchInputRef,
  setSearchInput,
  notFound,
  inputValue,
  netice,
}) => {
  return (
    <>
      <div
        ref={searchRef}
        className="fixed top-0 left-0 w-full h-full bg-[#191919bf] z-[1500] transition_css1 hidden_search "
      >
        <MaxWidth maxWidth="h-full max-w-[1200px]">
          <div className="flex justify-center pt-[100px]">
            <input
              type="text"
              ref={searchInputRef}
              onChange={(e) =>
                setSearchInput(e.target.value.toLocaleLowerCase())
              }
              placeholder="Axtar..."
              className="text-black w-full text-[17px] outline-none px-[20px] py-[20px] rounded-xl"
            />
          </div>
          <div className=" w-full mt-[30px]  ">
            {loading && <SearchSpinner />}

            {/* Eğer yüklenmiyorsa, sonuç yoksa ve input boş değilse hata mesajı göster */}
            {!loading && notFound && inputValue?.trim() !== "" && (
              <p className="text-[--blue41] w-full text-[16px] flex items-center justify-center bg-[#fff] px-[20px] py-[10px] rounded-[6px]  font-semibold">
                {netice || "Axtarışa uyğun nəticə tapılmadı"}
              </p>
            )}

            <ul className="flex flex-col gap-[20px]">
              {xidmetler?.results?.map((cur, i) => {
                // URL DÜZELTME MANTIĞI:
                // Eğer params 'az' ise prefix koyma, değilse '/en' vb. koy.
                const urlPrefix = params === "az" ? "" : `/${params}`;
                const fullUrl = `${urlPrefix}/xidmetler/${cur?.id}/${cur?.slug}`;

                return (
                  <li
                    key={cur?.id || i}
                    className="flex items-center gap-[20px] bg-[#fff] rounded-[20px]  px-[20px] py-[10px] "
                  >
                    <Link
                      href={fullUrl}
                      onClick={close} // Sonuca tıklayınca arama kapansın
                      className="w-full flex h-full items-center gap-[20px]"
                    >
                      <h3 className="text-[16px] bg-[#f4f6f6] rounded-[5px] px-[10px] py-[5px]">
                        {xidmetler?.page_title}
                      </h3>
                      <h4 className="text-[16px] text-[--blue41]">
                        {cur?.title}
                      </h4>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </MaxWidth>
        <span
          onClick={close}
          className="absolute top-[30px] right-[30px] text-white text-[35px] cursor-pointer"
        >
          <IoCloseOutline />
        </span>
      </div>
    </>
  );
};

export default SearchComponent;
