// ServiceFrom.js

"use client";

import ContactForm from "../../Shared/ContactForm/ContactForm";

const ServiceFrom = ({
  contact_us_text1,
  contact_us_text2,
  form_send_message,
  form_send_message_btn,
  exit,
  error_message,
  form_error_message,
  name_fullname,
  phoneNumber,
  selectServices,
  defaultServiceId, // Yeni propu qəbul edirik
  allServices, // Yeni propu qəbul edirik
  textCenter,
  form_sending,
}) => {
  return (
    <>
      <ContactForm
        colorH2={`text-[#011E41] text-[34px] lg:text-[25px]`}
        contact_us_text1={contact_us_text1}
        contact_us_text2={contact_us_text2}
        form_send_message={form_send_message}
        form_send_message_btn={form_send_message_btn}
        exit={exit}
        error_message={error_message}
        form_error_message={form_error_message}
        name_fullname={name_fullname}
        phone_number={phoneNumber}
        form_sending={form_sending}
        selectServices={selectServices}
        data={allServices} // `allServices`-i `data` olaraq ötürürük
        defaultServiceId={defaultServiceId} // Propu aşağı ötürürük
        textCenter={textCenter}
      />
    </>
  );
};

export default ServiceFrom;
