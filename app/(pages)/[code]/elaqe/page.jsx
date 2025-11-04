import { getAPIData, getTrData } from "@/app/(components)/getData/getAPIData";
import Footer from "@/app/(components)/Layout/Footer";
import Header from "@/app/(components)/Layout/Header";
import Contact from "@/app/(components)/Pages/Contact/Contact";
import { generateKeywordsFromWords } from "@/app/(components)/Shared/toSlug";

const getData = async (params) => {
  const dataFull = await getAPIData(params?.code, "contact_page");
  const trans = await getTrData(params?.code);
  const menu1 = await getAPIData(params?.code, "menu");
  return { trans, dataFull, menu1 };
};

export async function generateMetadata({ params }) {
  try {
    const { trans, dataFull } = await getData(params);
    const baseUrl = `${process.env.NEXT_PUBLIC_SITE_NAME}`;
    const pictureBaseUrl = process.env.NEXT_PUBLIC_PICTURE;
    const logoUrl = `${pictureBaseUrl}/${dataFull?.settings?.logo}`;
    const faviconUrl = `${pictureBaseUrl}/${dataFull?.settings?.favicon}`;
    const generatedKeywords = generateKeywordsFromWords(
      trans?.contact_page_description
    );

    return {
      title: `${dataFull?.settings?.title} - ${trans?.contact_title}`,
      description: trans?.contact_page_description,
      keywords: generatedKeywords,
      icons: {
        icon: faviconUrl,
        apple: faviconUrl,
      },
      openGraph: {
        title: `${dataFull?.settings?.title} - ${trans?.contact_title}`,
        description: trans?.contact_page_description,
        keywords: generatedKeywords,
        url: `${baseUrl}/${params?.code}/elaqe`,
        siteName: `${process.env.NEXT_PUBLIC_SITEREAL_NAME}`,
        type: "website",
        image: logoUrl,
        images: [
          {
            url: logoUrl,
            secure_url: logoUrl,
            width: 100,
            height: 50,
            type: "image/png",
            alt: dataFull?.settings?.title,
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
  const { dataFull, trans, menu1 } = await getData(params);
  return (
    <>
      <Header
        params={params?.code}
        menu={menu1?.menus}
        netice={trans?.netice}
      />
      <Contact
        params={params?.code}
        contact_title={trans?.contact_title}
        contact_page_description={trans?.contact_page_description}
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
        img={`${process.env.NEXT_PUBLIC_PICTURE}/${dataFull?.settings?.facebook_meta_data_backgorund}`}
        number={dataFull?.settings?.number}
        email={dataFull?.settings?.email}
        adresslang={dataFull?.settings?.adresslang}
        dataFull={dataFull?.services_data}
        form_sending={trans?.form_sending}
      />
      <Footer
        params={params?.code}
        footer_text={trans?.footer_text}
        facebook={dataFull?.settings?.facebook}
        instagram={dataFull?.settings?.instagram}
        youtube={dataFull?.settings?.youtube}
        linkedin={dataFull?.settings?.linkedin}
        logo={`${process.env.NEXT_PUBLIC_PICTURE}/${dataFull?.settings?.logob}`}
      />
    </>
  );
}
