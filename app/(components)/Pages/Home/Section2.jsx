import MaxWidth from "../../Shared/MaxWidth/MaxWidth";
import Section from "../../Shared/Section/Section";
import Texts from "../../Shared/Texts/Texts";

const Section2 = ({ sectionClass, section2Class, tille, text, logo }) => {
  return (
    <Section sectionClass={`${sectionClass}`}>
      <MaxWidth>
        <Texts
          img={`${process.env.NEXT_PUBLIC_PICTURE}/${logo}`}
          section2Class={section2Class}
          mainH2Class="md:mt-[40px]"
          text1={tille}
          text2={text}
        />
      </MaxWidth>
    </Section>
  );
};

export default Section2;
