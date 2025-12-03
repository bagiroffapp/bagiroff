import { getAPIData, getTrData } from "@/app/(components)/getData/getAPIData";
import Footer from "@/app/(components)/Layout/Footer";
import Header from "@/app/(components)/Layout/Header";
import Services from "@/app/(components)/Pages/Services/Services";
import { generateKeywordsFromWords } from "@/app/(components)/Shared/toSlug";

const getData = async (code) => {
  const main = await getAPIData(code, "xidmetler_page");
  const settings = await getAPIData(code, "settings");
  const menu1 = await getAPIData(code, "menu");
  const trans = await getTrData(code);
  return { main, trans, settings, menu1 };
};

export async function generateMetadata({ params }) {
  try {
    const { code } = await params;
    const { settings, main } = await getData(code);
    const baseUrl = `${process.env.NEXT_PUBLIC_SITE_NAME}`;
    const pictureBaseUrl = process.env.NEXT_PUBLIC_PICTURE;
    const logoUrl = `${pictureBaseUrl}/${settings?.logo}`;
    const faviconUrl = `${pictureBaseUrl}/${settings?.favicon}`;
    const generatedKeywords = generateKeywordsFromWords(
      main?.lang_content?.service_page_description
    );

    return {
      title: `${settings?.title} - ${main?.lang_content?.service_page_title}`,
      description: main?.lang_content?.service_page_description,
      keywords: generatedKeywords,
      icons: {
        icon: faviconUrl,
        apple: faviconUrl,
      },
      openGraph: {
        title: `${settings?.title} - ${main?.lang_content?.service_page_title}`,
        description: main?.lang_content?.service_page_description,
        keywords: generatedKeywords,
        url: `${baseUrl}/${code}/xidmetler`,
        siteName: `${process.env.NEXT_PUBLIC_SITEREAL_NAME}`,
        type: "website",
        image: logoUrl,
        images: [
          {
            url: logoUrl,
            secure_url: logoUrl,
            width: 300,
            height: 300,
            type: "image/png",
            alt: settings?.title,
          },
        ],
      },
    };
  } catch (error) {
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 });
    }
    return new Response("Xeta 1", { status: 500 });
  }
}

export default async function page({ params }) {
  const { code } = await params;
  const { main, trans, settings, menu1 } = await getData(code);
  return (
    <>
      <Header params={code} menu={menu1?.menus} netice={trans?.netice} />
      <Services
        readMore={trans?.more}
        params={code}
        servis_text2={trans?.our_services_alt_text}
        servis_text1={main?.lang_content?.service_page_title}
        data={main?.services}
      />
      <Footer
        params={code}
        footer_text={trans?.footer_text}
        facebook={settings?.facebook}
        instagram={settings?.instagram}
        youtube={settings?.youtube}
        linkedin={settings?.linkedin}
        logo={`${process.env.NEXT_PUBLIC_PICTURE}/${settings?.logob}`}
      />
    </>
  );
}
