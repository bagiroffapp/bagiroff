import Image from "next/image";
import Main from "../../Shared/Main/Main";
import MaxWidth from "../../Shared/MaxWidth/MaxWidth";
import Section from "../../Shared/Section/Section";
import Texts from "../../Shared/Texts/Texts";
import Grid from "../../Shared/Grid/Grid";
import GridSpan from "../../Shared/Grid/GridSpan";
import ServiceFrom from "./ServiceFrom";
import SahredBlueCard from "../../Shared/SahredBlueCard/SahredBlueCard";
import ConsultingIteGrid from "../Home/ConsultingIteGrid";
import TextwithButton from "../../Shared/TextwithButton/TextwithButton";
import SahredSerices from "../../Shared/SahredSerices/SahredSerices";
import Link from "next/link";
import { getAPIData } from "../../getData/getAPIData";
import { use } from "react";

const ServicesItem = ({
  params_slug,
  params_code,
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
  readMore,
  data,
  dataFull,
  other_servicves,
  service_single_page_all_services,
  service_single_page_other_services,
  service_single_page_our_advantage,
  form_sending,
}) => {
  const slugParts = Array.isArray(params_slug) ? params_slug : [params_slug];
  const currentSlug = slugParts[slugParts.length - 1];

  const currentService = dataFull?.find(
    (service) => service.slug === currentSlug
  );

  const currentServiceId = currentService ? currentService.id : null;

  return (
    <Main mainClass="mt-[80px] 2xl:my-[40px]">
      <Section>
        <MaxWidth>
          <Texts text1={data?.title} />
          <img
            width={100000}
            height={10000}
            className="object-cover w-full h-[400px] mt-[40px]"
            alt="service_item"
            src={data?.image}
          />
          <Grid gridClass="grid grid-cols-12 gap-[24px] mt-[40px] xl:mt-[30px] mb-[40px]">
            <GridSpan gridSpan={`col-span-7 lg:col-span-12`}>
              <div
                className="text-[16px] text-[--blue41] list_ul  "
                dangerouslySetInnerHTML={{ __html: `${data?.text}` }}
              />
            </GridSpan>
            <GridSpan
              gridSpan={`col-span-5 lg:col-span-12 bg-[#f4f6f6] h-max p-[40px] lg:p-[20px]`}
            >
              <ServiceFrom
                contact_us_text1={contact_us_text1}
                contact_us_text2={contact_us_text2}
                form_send_message={form_send_message}
                form_send_message_btn={form_send_message_btn}
                exit={exit}
                error_message={error_message}
                form_error_message={form_error_message}
                name_fullname={name_fullname}
                phoneNumber={phoneNumber}
                selectServices={selectServices}
                form_sending={form_sending}
                defaultServiceId={currentServiceId}
                allServices={dataFull}
                textCenter={true}
              />
            </GridSpan>
          </Grid>
          {data?.cards?.length > 0 && (
            <div className={`${data?.cardstat?.length > 0 ? "" : "mb-[40px]"}`}>
              <div className="mt-[80px] xl:mt-[40px]">
                <TextwithButton text={service_single_page_our_advantage} />
              </div>
              <Grid gridClass="grid grid-cols-12 gap-[24px] mt-[40px]">
                {data?.cards &&
                  data?.cards?.map((item, i) => (
                    <GridSpan
                      key={item?.id || i}
                      gridSpan={`col-span-3 lg:col-span-4 md:col-span-6 sm:col-span-12`}
                    >
                      <SahredBlueCard
                        text={item?.title}
                        title={item?.description}
                      />
                    </GridSpan>
                  ))}
              </Grid>
            </div>
          )}
          {data?.cardstat?.length > 0 && (
            <>
              <TextwithButton text={`Statistika`} customClass="mt-[40px]" />
              <ConsultingIteGrid
                data_cartstat={data?.cardstat}
                log={false}
                data_cards={true}
                gridClass={`grid grid-cols-12 gap-[24px] mb-[80px] mt-[40px]`}
              />
            </>
          )}
        </MaxWidth>
        <div className="bg-[#f4f6f6] py-[80px] xl:py-[40px]">
          <MaxWidth>
            <TextwithButton
              text={service_single_page_other_services}
              customClass="flex lg:flex-col"
              btn={true}
              hidClass="lg:hidden"
              params={params_code}
              btnText={service_single_page_all_services}
            />
            <SahredSerices
              data={other_servicves}
              params={params_code}
              readMore={readMore}
              customClass="bg-[#fff]"
            />
            <div className="hidden md:flex md:mt-[30px] md:items-center md:justify-center">
              <Link
                href={`/${params_code}/xidmetler`}
                className={`flex items-center gap-[12px] bg-[--footer] py-[13px] px-[60px] text-white text-[14px]`}
              >
                <h3>{service_single_page_all_services}</h3>
                <span>
                  <Image
                    width={12}
                    height={12}
                    alt="btn_more"
                    className="object-cover"
                    src={"/btn_more.svg"}
                  />
                </span>
              </Link>
            </div>
          </MaxWidth>
        </div>
      </Section>
    </Main>
  );
};

export default ServicesItem;
