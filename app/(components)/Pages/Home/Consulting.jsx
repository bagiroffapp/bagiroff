import MaxWidth from "../../Shared/MaxWidth/MaxWidth";
import Section from "../../Shared/Section/Section";
import Texts from "../../Shared/Texts/Texts";
import ConsultingIteGrid from "./ConsultingIteGrid";

const Consulting = ({
  cards,
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
  data_cards,
}) => {
  return (
    <Section sectionClass="my-[80px] lg:my-[40px] ">
      <MaxWidth>
        <Texts text1={consulting_head_text} text2={consulting_alt_text} />
        <ConsultingIteGrid
          cards={cards}
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
          data_cards={data_cards}
          log={true}
          gridClass={`mt-[120px] xl:mt-[80px] grid grid-cols-12 gap-[24px]`}
        />
      </MaxWidth>
    </Section>
  );
};

export default Consulting;
