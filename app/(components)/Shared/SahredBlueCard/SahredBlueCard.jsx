import Image from "next/image";

const SahredBlueCard = ({ img, text, title }) => {
  return (
    <>
      <div className="bg-[--footer] p-[40px] flex flex-col gap-[20px] 2xl:p-[20px] h-full">
        {img && (
          <Image
            width={40}
            height={40}
            className="object-cover"
            alt={text || "title"}
            src={img}
          />
        )}
        <h3 className="text-white text-[20px] lg:text-[18px] font-['Lota-Bold']">
          {text}
        </h3>
        <div
          className="text-white text-[14px] "
          dangerouslySetInnerHTML={{ __html: `${title}` }}
        />
      </div>
    </>
  );
};

export default SahredBlueCard;
