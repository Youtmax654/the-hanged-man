import Image from "next/image";

type GameHangedManProps = {
  step: number;
};

const GameHangedMan: React.FC<GameHangedManProps> = ({ step }) => {
  const manParts = [
    <Image
      key={"Head"}
      src="/Head.svg"
      alt="Head"
      width={200}
      height={0}
      className="absolute bottom-60 left-64"
    />,
    <Image
      key={"Body"}
      src="/Body.svg"
      alt="Body"
      width={130}
      height={0}
      className="absolute bottom-[172px] left-[290px]"
    />,
    <Image
      key={"LeftArm"}
      src="/LeftArm.svg"
      alt="LeftArm"
      width={46}
      height={0}
      className="absolute bottom-[196px] left-[260px]"
    />,
    <Image
      key={"RightArm"}
      src="/RightArm.svg"
      alt="RightArm"
      width={46}
      height={0}
      className="absolute bottom-[192px] left-[403px]"
    />,
    <Image
      key={"LeftLeg"}
      src="/LeftLeg.svg"
      alt="LeftLeg"
      width={50}
      height={0}
      className="absolute bottom-[122px] left-[286px]"
    />,
    <Image
      key={"RightLeg"}
      src="/RightLeg.svg"
      alt="RightLeg"
      width={50}
      height={0}
      className="absolute bottom-[120px] left-[375px]"
    />,
  ];

  const visibleManParts = manParts.slice(0, step);

  return (
    <div className="absolute bottom-0 left-20">
      <Image src="/Stand.svg" alt="Stand" width={400} height={790} />
      {visibleManParts}
    </div>
  );
};

export default GameHangedMan;
