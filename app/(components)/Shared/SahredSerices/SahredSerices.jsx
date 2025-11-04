import Grid from "../Grid/Grid";
import GridSpan from "../Grid/GridSpan";
import ServiesItem from "../ServicedData/ServiesItem";

const SahredSerices = ({ data, readMore, params, customClass = "" }) => {
  return (
    <>
      <Grid gridClass="grid grid-cols-12 gap-[24px] mt-[40px] xl:mt-[40px]">
        {data &&
          data?.map((cur, i) => (
            <GridSpan
              key={cur?.id || i}
              gridSpan={`col-span-4 lg:col-span-6 md:col-span-12`}
            >
              <ServiesItem
                customClass={customClass}
                item={cur}
                readMore={readMore}
                params={params}
              />
            </GridSpan>
          ))}
      </Grid>
    </>
  );
};

export default SahredSerices;
