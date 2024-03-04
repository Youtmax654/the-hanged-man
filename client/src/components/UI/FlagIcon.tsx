type Props = {
  code: string;
  className?: string;
};

const FlagIcon: React.FC<Props> = ({ code, className }) => {
  return <span className={`fi fi-${code} ${className}`}></span>;
};

export default FlagIcon;
