import { FaPlus } from "react-icons/fa6";
import Texts from "../../Shared/Texts/Texts";
import Image from "next/image";
const ConsultingIte = ({
  log = false,
  number,
  text,
  image,
  title = "",
  desc = "",
  data_cards = false,
}) => {
  return (
    <>
      <div
        className={`bg-[#f4f6f6] flex items-center  text-center relative ${
          log === true
            ? "px-[40px] flex-col pt-[60px] pb-[40px] md:flex-row md:px-[20px] md:py-[20px] md:justify-start gap-[30px]"
            : "flex-col px-[40px] pt-[60px] pb-[40px] lg:px-[20px] lg:pt-[30px] justify-center"
        }`}
      >
        {data_cards === true ? (
          <Texts text1={title} text2={desc} log={log} gap="gap-[20px]" />
        ) : (
          <Texts
            text1={number}
            IconComponent={FaPlus}
            text2={text}
            log={log}
            gap="gap-[20px]"
          />
        )}

        {log === true && (
          <span className="absolute -top-10 bg-[--mavi] left-[50%] w-[70px] h-[70px] flex items-center justify-center translate-x-[-50%] md:translate-x-[0%] p-[20px] md:static md:-order-1">
            <Image
              width={150}
              height={150}
              alt={text}
              src={image}
              className="w-full h-full object-cover"
            />
          </span>
        )}
      </div>
    </>
  );
};

export default ConsultingIte;
