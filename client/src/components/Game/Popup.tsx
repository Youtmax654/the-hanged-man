import Title from "../Main/Title";
import Button from "../UI/Button";

type Props = {
  gameOver: boolean;
  word?: string;
  score?: number;
  replay: () => void;
  t: any;
};

const Popup: React.FC<Props> = ({ gameOver, word, score, replay, t }) => {
  return (
    <div className="absolute z-10 flex size-full items-center justify-center backdrop-brightness-50">
      <div className="flex h-[380px] w-[800px] flex-col items-center justify-center gap-10 rounded-2xl bg-white">
        <Title
          value={gameOver ? t("loose") : t("congrats")}
          className="text-[80px]"
        />
        <p className="w-[660px] text-center text-3xl font-light">
          {gameOver ? (
            <>
              {t("tooBad")} “<span className="font-bold">{word}</span>”.
              {t("nextTime")}
            </>
          ) : (
            t("score") + `${score}/100`
          )}
        </p>
        <Button value={t("replay")} onClick={replay} />
      </div>
    </div>
  );
};

export default Popup;
