import { getAPIData, getTrData } from "@/app/(components)/getData/getAPIData";
import Footer from "@/app/(components)/Layout/Footer";
import Header from "@/app/(components)/Layout/Header";
import ServicesItem from "@/app/(components)/Pages/Services/ServicesItem";
import {
  generateKeywordsFromWords,
  stripHTML,
} from "@/app/(components)/Shared/toSlug";

const getData = async (code, id, slug) => {
  const main = await getAPIData(code, `xidmet/${id}/${slug}`);
  const dataFull = await getAPIData(code, "xidmetler_page");
  const settings = await getAPIData(code, "settings");
  const trans = await getTrData(code);
  const menu1 = await getAPIData(code, "menu");
  return { main, trans, settings, dataFull, menu1 };
};

export async function generateMetadata({ params }) {
  try {
    const { code, id, slug } = await params;
    const { settings, main } = await getData(code, id, slug);
    const baseUrl = `${process.env.NEXT_PUBLIC_SITE_NAME}`;
    const pictureBaseUrl = process.env.NEXT_PUBLIC_PICTURE;
    const logoUrl = `${main?.service?.image}`;
    const faviconUrl = `${pictureBaseUrl}/${settings?.favicon}`;
    const generatedKeywords = generateKeywordsFromWords(main?.service?.text);
    const desc = stripHTML(main?.service?.text);

    return {
      title: `${settings?.title} - ${main?.service?.title}`,
      description: desc,
      keywords: generatedKeywords,
      icons: {
        icon: faviconUrl,
        apple: faviconUrl,
      },
      openGraph: {
        title: `${settings?.title} - ${main?.service?.title}`,
        description: desc,
        keywords: generatedKeywords,
        url: `${baseUrl}/${code}/xidmetler/${id}/${slug}`,
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
  const { code, id, slug } = await params;
  const { main, trans, settings, dataFull, menu1 } = await getData(
    code,
    id,
    slug
  );
  return (
    <>
      <Header params={code} menu={menu1?.menus} netice={trans?.netice} />
      <ServicesItem
        params_code={code}
        params_slug={slug}
        dataFull={dataFull?.services}
        data={main?.service}
        other_servicves={main?.related}
        contact_us_text1={trans?.contact_page_form_title}
        contact_us_text2={trans?.contact_page_description}
        form_send_message={trans?.form_success}
        form_send_message_btn={trans?.send_message}
        exit={trans?.exit_form}
        error_message={trans?.form_error_1}
        form_error_message={trans?.form_error_2}
        name_fullname={trans?.form_name_surname}
        phoneNumber={trans?.form_name_number}
        selectServices={trans?.select_services}
        form_sending={trans?.form_sending}
        readMore={trans?.more}
        service_single_page_all_services={
          trans?.service_single_page_all_services
        }
        service_single_page_other_services={
          trans?.service_single_page_other_services
        }
        service_single_page_our_advantage={
          trans?.service_single_page_our_advantage
        }
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
