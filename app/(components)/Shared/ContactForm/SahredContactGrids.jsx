import React from "react";
import Grid from "../Grid/Grid";
import GridSpan from "../Grid/GridSpan";
import ContactForm from "./ContactForm";
import Image from "next/image";

const SahredContactGrids = ({
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
  form_sending,
}) => {
  return (
    <>
      <Grid>
        <GridSpan
          gridSpan={`col-span-8 bg-[#f4f6f6] px-[80px] pt-[40px] pb-[80px] md:pb-[30px] lg:col-span-12 lg:px-[20px]`}
        >
          <ContactForm
            contact_us_text1={contact_us_text1}
            contact_us_text2={contact_us_text2}
            params={params}
            form_send_message={form_send_message}
            exit={exit}
            error_message={error_message}
            form_error_message={form_error_message}
            name_fullname={name_fullname}
            phone_number={phone_number}
            data={data}
            selectServices={selectServices}
            img={img}
            form_sending={form_sending}
            form_send_message_btn={form_send_message_btn}
          />
        </GridSpan>
        <GridSpan
          gridSpan={"col-span-4 flex justify-center items-center lg:hidden"}
        >
          <Image
            width={1000}
            height={800}
            src={img}
            alt="contact"
            className="w-full h-[421px] object-cover -ml-36"
          />
        </GridSpan>
      </Grid>
    </>
  );
};

export default SahredContactGrids;
