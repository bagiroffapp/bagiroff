import MaxWidth from "../../Shared/MaxWidth/MaxWidth";
import SahredSerices from "../../Shared/SahredSerices/SahredSerices";
import Section from "../../Shared/Section/Section";
import Texts from "../../Shared/Texts/Texts";

const HomeServices = ({
  data,
  readMore,
  params,
  our_services_text,
  our_services_alt_text,
}) => {
  return (
    <Section sectionClass="bg-[--blue] mt-[80px] lg:mt-[40px] py-[60px] lg:py-[30px] md:px-[15px]">
      <MaxWidth>
        <Texts
          text1={our_services_text}
          colorP="text-[#AAB5B8]"
          colorH2="text-[#fff] text-[48px] xl:text-[30px] md:text-[20px]"
          text2={our_services_alt_text}
        />
        <SahredSerices
          data={data}
          readMore={readMore}
          params={params}
          customClass="bg-[#fff]"
        />
      </MaxWidth>
    </Section>
  );
};

export default HomeServices;
