import Title from "../Main/Title";
import Button from "../UI/Button";

type Props = {
  gameOver: boolean;
  word?: string;
  score?: number;
  replay: () => void;
};

const Popup: React.FC<Props> = ({ gameOver, word, score, replay }) => {
  return (
    <div className="absolute z-10 flex size-full items-center justify-center backdrop-brightness-50">
      <div className="flex h-[380px] w-[800px] flex-col items-center justify-center gap-10 rounded-2xl bg-white">
        <Title value={gameOver ? "PERDU" : "BRAVO"} className="text-[80px]" />
        <p className="w-[660px] text-center text-3xl font-light">
          {gameOver ? (
            <>
              Dommage ! Le mot était “<span className="font-bold">{word}</span>”
              . La prochaine fois sera la bonne
            </>
          ) : (
            `Tu as obtenu un score de ${score}/100`
          )}
        </p>
        <Button value="Rejouer" onClick={replay} />
      </div>
    </div>
  );
};

export default Popup;
