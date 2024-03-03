import Title from "../Main/Title";

type Props = {
  gameOver: boolean;
  word?: string;
  score?: number;
};

const Popup: React.FC<Props> = ({ gameOver, word, score }) => {
  return (
    <div>
      <Title value={gameOver ? "PERDU" : "BRAVO"} className="text-[80px]" />
      <p className="font-light">
        {gameOver
          ? `Dommage ! Le mot était “<span className="font-bold">${word}</span>”. La prochaine fois sera la bonne`
          : `Tu as obtenu un score de ${score}/100`}
      </p>
    </div>
  );
};

export default Popup;
