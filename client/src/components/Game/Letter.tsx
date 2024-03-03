import Title from "../Main/Title";

type Props = {
  letter: string;
  showLetter?: boolean;
};

const Letter: React.FC<Props> = ({ letter, showLetter }) => {
  return (
    <div className="flex flex-col relative">
      {showLetter && (
        <Title
          value={letter}
          className="text-[80px] absolute bottom-0 left-1/2 mb-4 -translate-x-1/2"
        />
      )}
      <span className="bg-black w-[63px] h-0 border-[10px] border-black border-solid"></span>
    </div>
  );
};

export default Letter;
