type Props = {
  value: string;
  onClick?: () => void;
};

const Button: React.FC<Props> = ({ value, onClick }) => {
  return (
    <button
      className="font-medium text-[46px] text-white bg-black/90 border-black border-solid border-[7px] rounded-2xl h-[90px] px-5"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;
