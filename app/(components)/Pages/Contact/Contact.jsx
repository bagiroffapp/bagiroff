import Image from "next/image";
import SahredContactGrids from "../../Shared/ContactForm/SahredContactGrids";
import Grid from "../../Shared/Grid/Grid";
import GridSpan from "../../Shared/Grid/GridSpan";
import Main from "../../Shared/Main/Main";
import MaxWidth from "../../Shared/MaxWidth/MaxWidth";
import Section from "../../Shared/Section/Section";
import Texts from "../../Shared/Texts/Texts";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Contact = ({
  contact_us_text1,
  contact_us_text2,
  params,
  form_send_message,
  exit,
  error_message,
  form_error_message,
  name_fullname,
  phoneNumber,
  selectServices,
  img,
  form_send_message_btn,
  contact_title,
  contact_page_description,
  number,
  email,
  adresslang,
  dataFull,
  form_sending,
}) => {
  const cleanedNumber = number?.replace(/\D/g, "");
  return (
    <Main mainClass="mt-[80px] 2xl:mt-[40px]">
      <Section>
        <MaxWidth>
          <Texts
            text1={contact_title}
            text2={contact_page_description}
            gap="gap-[20px]  text-center"
          />
          <div className="mt-[80px] lg:mt-[40px]">
            <div className="bg-[--footer]  py-[30px]">
              <MaxWidth maxWidth="max-w-[800px]">
                <Grid gridClass="text-white gap-[24px] grid grid-cols-12 ">
                  <GridSpan
                    gridSpan={`col-span-4 lg:py-[10px] lg:col-span-6 md:col-span-12 relative lg:flex lg:w-full lg:items-center lg:gap-[15px] lg:flex-col lg:justify-evenly lg:bg-[--blue2] lg:border lg:border-[#f4f6f62a]`}
                  >
                    <a
                      href={`tel:${cleanedNumber}`}
                      className="py-[40px] lg:py-0  flex items-center justify-center h-full lg:h-max text-[16px] lg:w-full"
                    >
                      {number}
                    </a>
                    <span
                      className="absolute -top-[60px] left-[50%] bg-[--mavi] p-[17px]  w-[60px] h-[60px] flex items-center translate-x-[-50%] lg:translate-x-[0] lg:static lg:-order-1 
                    lg:h-max"
                    >
                      <Image
                        alt="number site"
                        width={24}
                        height={24}
                        className="object-cover"
                        src={"/phone.svg"}
                      />
                    </span>
                  </GridSpan>
                  <GridSpan
                    gridSpan={`col-span-4 lg:py-[10px]  lg:col-span-6 md:col-span-12 relative lg:flex lg:w-full lg:items-center lg:gap-[15px] lg:flex-col lg:justify-evenly lg:bg-[--blue2] lg:border lg:border-[#f4f6f62a]`}
                  >
                    <a
                      href={`mailto:${email}`}
                      className="py-[40px] lg:py-0  flex items-center justify-center h-full lg:h-max text-[16px] lg:w-full"
                    >
                      {email}
                    </a>
                    <span className="absolute -top-[60px] left-[50%] bg-[--mavi] w-[60px] h-[60px] flex items-center p-[17px] translate-x-[-50%] lg:translate-x-[0] lg:static lg:-order-1 ">
                      <Image
                        alt="number site"
                        width={24}
                        height={24}
                        className="object-cover"
                        src={"/mail.svg"}
                      />
                    </span>
                  </GridSpan>
                  <GridSpan
                    gridSpan={`col-span-4 lg:py-[10px]  lg:col-span-6 md:col-span-12 relative lg:flex lg:w-full lg:items-center lg:gap-[15px] lg:flex-col lg:justify-evenly lg:bg-[--blue2] lg:border lg:border-[#f4f6f62a]`}
                  >
                    <div
                      className="py-[40px] lg:py-0  flex items-center justify-center h-full lg:h-max text-[16px] lg:w-full text-center"
                      dangerouslySetInnerHTML={{ __html: `${adresslang}` }}
                    />

                    <span className="absolute -top-[60px] text-[28px] left-[50%] w-[60px] h-[60px] flex items-center justify-center bg-[--mavi] p-[17px]  translate-x-[-50%] lg:translate-x-[0] lg:static lg:-order-1 ">
                      <HiOutlineLocationMarker />
                    </span>
                  </GridSpan>
                </Grid>
              </MaxWidth>
            </div>
            <SahredContactGrids
              img={img}
              data={dataFull}
              exit={exit}
              params={params}
              phone_number={phoneNumber}
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
          </div>
        </MaxWidth>
      </Section>
    </Main>
  );
};

export default Contact;
