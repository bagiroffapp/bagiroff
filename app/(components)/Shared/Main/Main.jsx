const Main = ({ mainClass = "", children }) => {
  // const mainProps = {};

  // if (mainClass) {
  //   mainProps.className = mainClass;
  // }

  return (
    <main className={`pt-[120px] xl:pt-[87px] lg:pt-[60px] ${mainClass}`}>
      {children}
    </main>
  );
};

export default Main;
