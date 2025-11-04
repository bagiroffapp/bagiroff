import Image from "next/image";
import Main from "../../Shared/Main/Main";
import Section from "../../Shared/Section/Section";
import MaxWidth from "../../Shared/MaxWidth/MaxWidth";
import Texts from "../../Shared/Texts/Texts";
import Grid from "../../Shared/Grid/Grid";
import GridSpan from "../../Shared/Grid/GridSpan";
import OurValues from "./OurValues";
import SahredBlueCard from "../../Shared/SahredBlueCard/SahredBlueCard";

const About = ({
  text1,
  picture,
  longText,
  meqsedimiz,
  meqsedimiz_alt,
  deyerlerimiz,
  deyerlerimiz_alt,
  blue_card_top_text1,
  blue_card_top_text2,
  blue_card_top_text3,
  blue_card_top_text4,
  blue_card1_editor1,
  blue_card1_editor2,
  blue_card1_editor3,
  blue_card1_editor4,
  corparatives,
}) => {
  const meqsed_cards = [
    {
      id: 1,
      text: blue_card_top_text1,
      title: blue_card1_editor1,
      img: "/about_star.svg",
    },
    {
      id: 2,
      text: blue_card_top_text2,
      title: blue_card1_editor2,
      img: "/about_star.svg",
    },
    {
      id: 3,
      text: blue_card_top_text3,
      title: blue_card1_editor3,
      img: "/about_star.svg",
    },
    {
      id: 4,
      text: blue_card_top_text4,
      title: blue_card1_editor4,
      img: "/about_star.svg",
    },
  ];

  const valid_cards = meqsed_cards.filter((card) => card.text);

  return (
    <Main mainClass="min-h-screen my-[80px] 2xl:my-[40px] lg:my-[20px]">
      <Section sectionClass="lg:px-[15px]">
        <MaxWidth>
          <h2
            className="text-center text-[48px] xl:text-[30px] lg:text-[20px] font-['Lota-Bold'] text-[--blue41]"
            dangerouslySetInnerHTML={{ __html: `${text1}` }}
          />

          <Image
            width={10000}
            height={500}
            className="w-full h-[500px] object-cover mt-[80px] 2xl:mt-[40px] lg:mt-[20px]"
            alt={text1}
            src={`${picture}`}
          />
          <div
            className="my-[80px] 2xl:my-[40px] lg:my-[20px] text-[--footer] text-[16px] lg:text-[13px]"
            dangerouslySetInnerHTML={{ __html: `${longText}` }}
          />
        </MaxWidth>
        <div className="bg-[#f4f6f6] py-[80px] 2xl:py-[40px]">
          <MaxWidth>
            <Texts text1={deyerlerimiz} text2={deyerlerimiz_alt} />
            <Grid gridClass="mt-[80px] 2xl:mt-[40px] grid grid-cols-12 gap-[24px]">
              {valid_cards?.map((cur, i) => (
                <GridSpan
                  key={cur?.id || i}
                  gridSpan={`col-span-3 lg:col-span-4 md:col-span-6 sm:col-span-12 h-full`}
                >
                  <SahredBlueCard
                    img={cur?.img}
                    text={cur?.text}
                    title={cur?.title}
                  />
                </GridSpan>
              ))}
            </Grid>
          </MaxWidth>
        </div>
        {corparatives?.length > 0 && (
          <div className="py-[80px] lg:py-[40px]">
            <MaxWidth>
              <Texts text1={meqsedimiz} text2={meqsedimiz_alt} />
              <OurValues cards={corparatives} />
            </MaxWidth>
          </div>
        )}
      </Section>
    </Main>
  );
};

export default About;
