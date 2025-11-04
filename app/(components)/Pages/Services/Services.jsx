import Main from "../../Shared/Main/Main";
import MaxWidth from "../../Shared/MaxWidth/MaxWidth";
import SahredSerices from "../../Shared/SahredSerices/SahredSerices";
import Section from "../../Shared/Section/Section";
import Texts from "../../Shared/Texts/Texts";

const Services = ({ servis_text1, servis_text2, params, readMore, data }) => {
  return (
    <Main mainClass="my-[80px] 2xl:my-[40px]">
      <Section>
        <MaxWidth>
          <Texts
            text1={servis_text1}
            text2={servis_text2}
            gap="gap-[20px] items-center"
          />
          <div>
            <SahredSerices
              data={data}
              params={params}
              readMore={readMore}
              customClass="bg-[#f4f6f6]"
            />
          </div>
        </MaxWidth>
      </Section>
    </Main>
  );
};

export default Services;
