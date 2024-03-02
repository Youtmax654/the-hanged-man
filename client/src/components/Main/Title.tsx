type TitleProps = {
  value: string;
  className?: string;
};

const Title: React.FC<TitleProps> = ({ value, className }) => {
  return <h1 className={`font-bold leading-none ${className}`}>{value}</h1>;
};

export default Title;
