"use client";

import { useState } from "react";

import { IoIosArrowUp, IoIosClose } from "react-icons/io";
import Title from "../Main/Title";

type Props = {
  wrongLetters: string[];
};

const WrongLetters: React.FC<Props> = ({ wrongLetters }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div
      className={`relative ${
        open ? "h-[250px]" : "h-[100px]"
      } flex w-[700px] items-center justify-center
      rounded-2xl bg-red-300 duration-500`}
    >
      <span
        onClick={handleOpen}
        className="absolute 
                  -top-7 
                  left-1/2 
                  flex 
                  size-14 
                  -translate-x-1/2 
                  cursor-pointer 
                  items-center 
                  justify-center 
                  rounded-xl 
                  border-[7px] 
                  border-solid 
                  border-white
                  bg-red-500"
      >
        {open ? (
          <IoIosClose size={50} color="white" />
        ) : (
          <IoIosArrowUp size={50} color="white" />
        )}
      </span>
      <div className="w-[600px]">
        {wrongLetters.length > 0 && open && (
          <Title value={wrongLetters.join(", ")} className="text-[60px]" />
        )}
      </div>
    </div>
  );
};

export default WrongLetters;
