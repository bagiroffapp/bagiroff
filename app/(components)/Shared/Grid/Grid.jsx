const Grid = ({ gridClass = "grid grid-cols-12", children }) => {
  return <div className={` ${gridClass}`}>{children}</div>;
};

export default Grid;
