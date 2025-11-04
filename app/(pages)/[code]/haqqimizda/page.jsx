import { getAPIData, getTrData } from "@/app/(components)/getData/getAPIData";
import Footer from "@/app/(components)/Layout/Footer";
import Header from "@/app/(components)/Layout/Header";
import About from "@/app/(components)/Pages/About/About";
import { generateKeywordsFromWords } from "@/app/(components)/Shared/toSlug";

const getData = async (params) => {
  const main = await getAPIData(params?.code, "haqqimizda_page");
  const settings = await getAPIData(params?.code, "settings");
  const trans = await getTrData(params?.code);
  const menu1 = await getAPIData(params?.code, "menu");
  return { main, trans, settings, menu1 };
};

export async function generateMetadata({ params }) {
  try {
    const { settings, trans, main } = await getData(params);
    const baseUrl = `${process.env.NEXT_PUBLIC_SITE_NAME}`;
    const pictureBaseUrl = process.env.NEXT_PUBLIC_PICTURE;
    const logoUrl = `${pictureBaseUrl}/${main?.about?.image}`;
    const faviconUrl = `${pictureBaseUrl}/${settings?.favicon}`;
    const generatedKeywords = generateKeywordsFromWords(main?.about?.text);

    return {
      title: `${settings?.title} - ${trans?.about_page}`,
      description: settings?.description,
      keywords: generatedKeywords,
      icons: {
        icon: faviconUrl,
        apple: faviconUrl,
      },
      openGraph: {
        title: `${settings?.title} - ${settings?.about_page}`,
        description: settings?.description,
        keywords: generatedKeywords,
        url: `${baseUrl}/${params?.code}/haqqimizda`,
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
    return new Response("Internal Server Error", { status: 500 });
  }
}

export default async function page({ params }) {
  const { main, trans, settings, menu1 } = await getData(params);
  return (
    <>
      <Header
        params={params?.code}
        menu={menu1?.menus}
        netice={trans?.netice}
      />
      <About
        text1={main?.about?.title}
        picture={`${process.env.NEXT_PUBLIC_PICTURE}/${main?.about?.image}`}
        longText={`${main?.about?.text}`}
        meqsedimiz={main?.lang?.about_page_out_goal}
        meqsedimiz_alt={main?.lang?.about_page_out_goal_description}
        deyerlerimiz={main?.lang?.about_page_our_values_title}
        deyerlerimiz_alt={main?.lang?.about_page_our_values_description}
        blue_card_top_text1={main?.about?.blue_card_top_text1}
        blue_card_top_text2={main?.about?.blue_card_top_text2}
        blue_card_top_text3={main?.about?.blue_card_top_text3}
        blue_card_top_text4={main?.about?.blue_card_top_text4}
        blue_card1_editor1={main?.about?.blue_card1_editor}
        blue_card1_editor2={main?.about?.blue_card2_editor}
        blue_card1_editor3={main?.about?.blue_card3_editor}
        blue_card1_editor4={main?.about?.blue_card4_editor}
        corparatives={main?.corparatives}
      />
      <Footer
        params={params?.code}
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
