import Image from "next/image";

const Texts = ({
  text1,
  text2,
  img,
  colorP = "text-[#011E41] md:text-center",
  colorH2 = "text-[#011E41] text-[48px] 2xl:text-[30px] md:text-[20px] md:text-center",
  gap = "gap-[40px] 2xl:gap-[20px] lg:gap-[20px]",
  IconComponent = "",
  section2Class = "w-full",
  mainH2Class = "",
  log,
  textCenter,
}) => {
  return (
    <>
      <div
        className={`flex  ${gap} relative  ${
          log === true
            ? "md:items-center gap-[20px] md:gap-[10px  ] flex-col md:flex-row"
            : "flex-col"
        }`}
      >
        <div
          className={`${
            IconComponent ? "flex items-center gap-[5px]" : ""
          } ${mainH2Class}  ${textCenter === true ? "lg:text-center" : ""}`}
        >
          {text1 && (
            <h2
              className={`font-['Lota-Bold'] ${colorH2} ${
                IconComponent ? "w-full" : `${section2Class}`
              }`}
              dangerouslySetInnerHTML={{ __html: `${text1}` }}
            />
          )}
          {/* {IconComponent && (
            <IconComponent className="text-[30px] md:text-[20px] " />
          )} */}
        </div>
        {text2 && (
          <div
            className={` ${colorP} text-[14px]`}
            dangerouslySetInnerHTML={{ __html: `${text2}` }}
          />
        )}
        {img && (
          <span className="absolute top-[-180px] xl:top-[-120px] md:translate-x-[-50%] right-[150px] md:right-0 md:left-[50%] bg-[--blue] p-[40px] z-50 flex w-[200px] xl:w-[130px] h-[200px] xl:h-[130px]">
            <Image width={160} height={160} src={img} alt={text1 || text2} />
          </span>
        )}
      </div>
    </>
  );
};

export default Texts;
