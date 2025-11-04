const Section = ({ sectionClass = "", children }) => {
  const sectionProps = {};

  if (sectionClass) {
    sectionProps.className = sectionClass;
  }

  return <section {...sectionProps}>{children}</section>;
};

export default Section;
