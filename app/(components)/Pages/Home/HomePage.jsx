"use client";
import ContactSection from "../../Shared/ContactForm/ContactSection";
import Main from "../../Shared/Main/Main";
import Section from "../../Shared/Section/Section";
import Consulting from "./Consulting";
import HomeServices from "./HomeServices";
import Partners from "./Partners";
import Section2 from "./Section2";
import Slider from "./Slider";

const HomePage = ({
  readMore,
  params,
  contact_us_text1,
  contact_us_text2,
  form_send_message,
  exit,
  error_message,
  form_error_message,
  name_fullname,
  phoneNumber,
  selectServices,
  img,
  partner_text1,
  partner_text2,
  form_send_message_btn,
  partners_data,
  data_process,
  logo,
  data_services,
  our_services_text,
  our_services_alt_text,
  form_sending,
  consulting_head_text,
  consulting_alt_text,
  process_icon1,
  process_icon2,
  process_icon3,
  process_icon4,
  process_stat1,
  process_stat2,
  process_stat3,
  process_stat4,
  process_label1,
  process_label2,
  process_label3,
  process_label4,
  slider_data,
  home_sections,
}) => {
  return (
    <>
      <Main>
        {home_sections?.section1 === 1 && (
          <Section>
            <Slider data={slider_data} />
          </Section>
        )}
        {home_sections?.section2 === 1 && (
          <Section2
            sectionClass="mt-[80px] xl:mt-[40px] lg:mt-[40px] "
            section2Class="w-[60%] md:w-full"
            tille={data_process?.title}
            text={data_process?.description}
            logo={logo}
          />
        )}

        {home_sections?.section3 === 1 && (
          <HomeServices
            data={data_services}
            readMore={readMore}
            params={params}
            our_services_text={our_services_text}
            our_services_alt_text={our_services_alt_text}
          />
        )}

        {home_sections?.section4 === 1 && (
          <ContactSection
            contact_us_text1={contact_us_text1}
            contact_us_text2={contact_us_text2}
            params={params}
            form_send_message={form_send_message}
            exit={exit}
            error_message={error_message}
            form_error_message={form_error_message}
            name_fullname={name_fullname}
            phone_number={phoneNumber}
            data={data_services}
            img={img}
            homeClass="w-full"
            selectServices={selectServices}
            form_send_message_btn={form_send_message_btn}
            form_sending={form_sending}
          />
        )}

        {home_sections?.section5 === 1 && (
          <Consulting
            consulting_head_text={consulting_head_text}
            consulting_alt_text={consulting_alt_text}
            process_icon1={process_icon1}
            process_icon2={process_icon2}
            process_icon3={process_icon3}
            process_icon4={process_icon4}
            process_stat1={process_stat1}
            process_stat2={process_stat2}
            process_stat3={process_stat3}
            process_stat4={process_stat4}
            process_label1={process_label1}
            process_label2={process_label2}
            process_label3={process_label3}
            process_label4={process_label4}
            data_cards={false}
          />
        )}

        {home_sections?.section6 === 1 && (
          <Partners
            partners={partners_data}
            partner_text1={partner_text1}
            partner_text2={partner_text2}
          />
        )}
      </Main>
    </>
  );
};

export default HomePage;
