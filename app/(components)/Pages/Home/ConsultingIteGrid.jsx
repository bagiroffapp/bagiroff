import Grid from "../../Shared/Grid/Grid";
import GridSpan from "../../Shared/Grid/GridSpan";
import ConsultingIte from "./ConsultingIte";

const ConsultingIteGrid = ({
  log,
  gridClass,
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
  data_cartstat,
}) => {
  const cards = [
    {
      id: 1,
      number: process_stat1,
      image: `${process.env.NEXT_PUBLIC_PICTURE}/${process_icon1}`,
      text: process_label1,
    },
    {
      id: 2,
      number: process_stat2,
      image: `${process.env.NEXT_PUBLIC_PICTURE}/${process_icon2}`,
      text: process_label2,
    },
    {
      id: 3,
      number: process_stat3,
      image: `${process.env.NEXT_PUBLIC_PICTURE}/${process_icon3}`,
      text: process_label3,
    },
    {
      id: 4,
      number: process_stat4,
      image: `${process.env.NEXT_PUBLIC_PICTURE}/${process_icon4}`,
      text: process_label4,
    },
  ];

  return (
    <>
      <Grid gridClass={gridClass}>
        {data_cards === false
          ? cards &&
            cards?.map((item, i) => (
              <GridSpan
                key={item?.id || i}
                gridSpan={`col-span-3 lg:col-span-4 md:col-span-6 sm:col-span-12`}
              >
                <ConsultingIte
                  log={log}
                  number={item?.number}
                  text={item?.text}
                  image={item?.image}
                />
              </GridSpan>
            ))
          : data_cartstat &&
            data_cartstat?.map((abc, i) => (
              <GridSpan
                key={abc?.id || i}
                gridSpan={`col-span-3 lg:col-span-4 md:col-span-6 sm:col-span-12`}
              >
                <ConsultingIte
                  data_cards={data_cards}
                  log={log}
                  title={abc?.title}
                  desc={abc?.description}
                />
              </GridSpan>
            ))}
      </Grid>
    </>
  );
};

export default ConsultingIteGrid;
