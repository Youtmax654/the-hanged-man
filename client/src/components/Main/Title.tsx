type Props = {
  value: string;
  className?: string;
};

const Title: React.FC<Props> = ({ value, className }) => {
  return <h1 className={`font-bold leading-none ${className}`}>{value}</h1>;
};

export default Title;
