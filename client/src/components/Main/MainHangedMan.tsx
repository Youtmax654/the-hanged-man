import Image from "next/image";

const MainHangedMan = () => {
  return (
    <div id="mainHangedMan" className="h-[815px] relative -top-5">
      <Image src="/Rope.svg" alt="Rope" width={60} height={0} />
      <div className="relative w-[200px] -left-16 -top-4">
        <Image
          src="/Body.svg"
          alt="Body"
          width={130}
          height={0}
          className="absolute top-36 left-8"
        />
        <Image
          src="/Head.svg"
          alt="Head"
          width={200}
          height={0}
          className="absolute top-0"
        />
        <Image
          src="/LeftArm.svg"
          alt="LeftArm"
          width={46}
          height={0}
          className="absolute top-36 left-0"
        />
        <Image
          src="/RightArm.svg"
          alt="RightArm"
          width={46}
          height={0}
          className="absolute top-36 right-1"
        />
        <Image
          src="/LeftLeg.svg"
          alt="LeftLeg"
          width={50}
          height={0}
          className="absolute top-48 left-6"
        />
        <Image
          src="/RightLeg.svg"
          alt="RightLeg"
          width={50}
          height={0}
          className="absolute top-48 right-7"
        />
      </div>
    </div>
  );
};

export default MainHangedMan;
