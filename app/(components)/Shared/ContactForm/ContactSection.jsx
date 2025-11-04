import Section from "../Section/Section";
import MaxWidth from "../MaxWidth/MaxWidth";
import SahredContactGrids from "./SahredContactGrids";

const ContactSection = ({
  contact_us_text1,
  contact_us_text2,
  params,
  form_send_message,
  exit,
  error_message,
  form_error_message,
  name_fullname,
  phone_number,
  data,
  selectServices,
  img,
  form_send_message_btn,
  homeClass,
  form_sending,
}) => {
  return (
    <Section>
      <MaxWidth maxWidth="md:px-[0] max-w-[1200px]">
        <SahredContactGrids
          img={img}
          data={data}
          exit={exit}
          params={params}
          homeClass={homeClass}
          phone_number={phone_number}
          form_sending={form_sending}
          error_message={error_message}
          name_fullname={name_fullname}
          selectServices={selectServices}
          contact_us_text1={contact_us_text1}
          contact_us_text2={contact_us_text2}
          form_send_message={form_send_message}
          form_error_message={form_error_message}
          form_send_message_btn={form_send_message_btn}
        />
      </MaxWidth>
    </Section>
  );
};

export default ContactSection;
