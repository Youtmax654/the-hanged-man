type Props = {
  step: number;
};

const GameHangedMan: React.FC<Props> = ({ step }) => {
  const manParts = [
    <img
      key={"Head"}
      src="/Head.svg"
      alt="Head"
      width={200}
      height={0}
      className="absolute bottom-60 left-64"
    />,
    <img
      key={"Body"}
      src="/Body.svg"
      alt="Body"
      width={130}
      height={0}
      className="absolute bottom-[172px] left-[290px]"
    />,
    <img
      key={"LeftArm"}
      src="/LeftArm.svg"
      alt="LeftArm"
      width={46}
      height={0}
      className="absolute bottom-[196px] left-[260px]"
    />,
    <img
      key={"RightArm"}
      src="/RightArm.svg"
      alt="RightArm"
      width={46}
      height={0}
      className="absolute bottom-[192px] left-[403px]"
    />,
    <img
      key={"LeftLeg"}
      src="/LeftLeg.svg"
      alt="LeftLeg"
      width={50}
      height={0}
      className="absolute bottom-[122px] left-[286px]"
    />,
    <img
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
    <div className="relative">
      <img src="/Stand.svg" alt="Stand" width={400} height={790} />
      {visibleManParts}
    </div>
  );
};

export default GameHangedMan;
