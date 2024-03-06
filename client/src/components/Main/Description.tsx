type Props = {
  value: string;
};

const Description: React.FC<Props> = ({ value }) => {
  return (
    <div className="w-[765px] text-pretty">
      <h2 className="text-black-100 text-3xl font-light">{value}</h2>
    </div>
  );
};

export default Description;
