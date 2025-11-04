const MaxWidth = ({ children, maxWidth = "max-w-[1200px]" }) => {
  return (
    <div
      className={` m-auto xl:max-w-full xl:px-[30px] lg:px-[20px] md:px-[10px]  ${maxWidth}`}
    >
      {children}
    </div>
  );
};

export default MaxWidth;
