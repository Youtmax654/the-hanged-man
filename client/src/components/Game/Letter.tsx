import Title from "../Main/Title";

type LetterProps = {
  letter: string;
  showLetter?: boolean;
};

const Letter: React.FC<LetterProps> = ({ letter, showLetter }) => {
  return (
    <div className="flex flex-col relative">
      {showLetter && (
        <Title value={letter} className="text-[100px] absolute bottom-0 mb-4" />
      )}
      <span className="bg-black w-[63px] h-0 border-[10px] border-black border-solid"></span>
    </div>
  );
};

export default Letter;
