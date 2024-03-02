type DescriptionProps = {
  value: string;
};

const Description: React.FC<DescriptionProps> = ({ value }) => {
  return (
    <div className="w-[765px] text-balance">
      <h2 className="text-black-100 text-3xl font-light">{value}</h2>
    </div>
  );
};

export default Description;
