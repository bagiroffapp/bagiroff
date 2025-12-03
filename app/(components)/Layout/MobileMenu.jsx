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
            // 1. URL Oluşturma Mantığı:
            // Eğer dil 'az' ise prefix boş string ("") olsun.
            // Eğer dil 'en' ise prefix "/en" olsun.
            const urlPrefix = params === "az" ? "" : `/${params}`;

            // Tam URL'yi oluşturuyoruz (Örn: /hizmetler veya /en/hizmetler)
            const fullUrl = `${urlPrefix}${cur?.slug_url}`;

            // 2. Active Class Kontrolü:
            // activePage tarayıcıdaki şu anki URL'dir (Örn: /hizmetler).
            // Anasayfa ('/') için tam eşleşme kontrolü yapıyoruz.
            // Diğer sayfalar için startsWith kullanıyoruz.
            const isHomePage = cur?.slug_url === "/";
            const isActive = isHomePage
              ? activePage === fullUrl ||
                (params !== "az" && activePage === `/${params}`)
              : activePage.startsWith(fullUrl);

            return (
              <li key={cur?.id || i} className="w-full ">
                <Link
                  // Linke tıklandığında menüyü kapatması için onClick ekledim
                  onClick={closeMobileMenu}
                  className={`flex text-[20px] capitalize  justify-center w-full  gap-2 cursor-pointer trans hover:text-[#003B71] ${
                    isActive ? "font-['Lota-Bold'] text-[--blue]" : ""
                  }`}
                  href={fullUrl}
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
