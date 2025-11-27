import {
  getAPIData,
  getAPIData2,
  getTrData,
} from "@/app/(components)/getData/getAPIData";
import Footer from "@/app/(components)/Layout/Footer";
import Header from "@/app/(components)/Layout/Header";
import HomePage from "@/app/(components)/Pages/Home/HomePage";

const getData = async (params) => {
  const main = await getAPIData(params?.code, "main_page");
  const settings = await getAPIData(params?.code, "settings");
  const home_sections = await getAPIData2("home_sections");
  const menu = await getAPIData(params?.code, "menu");
  const trans = await getTrData(params?.code);
  return { main, trans, settings, menu, home_sections };
};

export async function generateMetadata({ params }) {
  try {
    const { settings } = await getData(params);
    const baseUrl = `${process.env.NEXT_PUBLIC_SITE_NAME}`;
    const pictureBaseUrl = process.env.NEXT_PUBLIC_PICTURE;
    const logoUrl = `${pictureBaseUrl}/${settings?.logo}`;
    const faviconUrl = `${pictureBaseUrl}/${settings?.favicon}`;
    // const generatedKeywords = generateKeywordsFromWords(main?.slider?.text);

    return {
      title: `${settings?.title} - ${settings?.home_page}`,
      description: settings?.description,
      keywords: settings?.keywords,
      icons: {
        icon: faviconUrl,
        apple: faviconUrl,
      },
      openGraph: {
        title: `${settings?.title} - ${settings?.home_page}`,
        description: settings?.description,
        keywords: settings?.keywords,
        url: `${baseUrl}/${params?.code}`,
        siteName: `${process.env.NEXT_PUBLIC_SITEREAL_NAME}`,
        type: "website",
        image: logoUrl,
        images: [
          {
            url: logoUrl,
            secure_url: logoUrl,
            width: 100,
            height: 60,
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
  const { main, trans, settings, menu, home_sections } = await getData(params);
  return (
    <>
      <Header params={params?.code} menu={menu?.menus} netice={trans?.netice} />

      <HomePage
        home_sections={home_sections}
        slider_data={main?.slider}
        readMore={trans?.more}
        params={params?.code}
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
        img={`${process.env.NEXT_PUBLIC_PICTURE}/${settings?.facebook_meta_data_backgorund}`}
        partner_text1={trans?.partners}
        partner_text2={trans?.partners_alt_text}
        partners_data={main?.partners}
        data_process={main?.process}
        data_services={main?.services}
        logo={settings?.custom_image}
        our_services_text={trans?.our_services_text}
        our_services_alt_text={trans?.our_services_alt_text}
        form_sending={trans?.form_sending}
        consulting_head_text={main?.process?.title2}
        consulting_alt_text={main?.process?.description2}
        process_icon1={main?.process?.icon1}
        process_icon2={main?.process?.icon2}
        process_icon3={main?.process?.icon3}
        process_icon4={main?.process?.icon4}
        process_stat1={main?.process?.stat1}
        process_stat2={main?.process?.stat2}
        process_stat3={main?.process?.stat3}
        process_stat4={main?.process?.stat4}
        process_label1={main?.process?.label5}
        process_label2={main?.process?.label6}
        process_label3={main?.process?.label7}
        process_label4={main?.process?.label8}
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
