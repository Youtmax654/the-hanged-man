"use client";

import GameHangedMan from "@/components/Game/GameHangedMan";
import Letter from "@/components/Game/Letter";
import Description from "@/components/Main/Description";
import MainHangedMan from "@/components/Main/MainHangedMan";
import Title from "@/components/Main/Title";
import Button from "@/components/UI/Button";
import axios from "axios";
import { useState } from "react";

const isALetter = (l: string) => {
  return l.length === 1 && l.match(/[a-zA-Z]/i);
};

export default function Home() {
  const [page, setPage] = useState("Main");
  const [step, setStep] = useState(0);
  const [word, setWord] = useState("");

  const addManPart = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePlay = () => {
    axios.get("http://localhost:8080/api/fr/word").then((response) => {
      const randomWord = response.data.word.toUpperCase();
      setWord(randomWord);
      setPage("Game");

      window.addEventListener("keydown", function (e) {
        if (!isALetter(e.key)) return;
        if (randomWord.includes(e.key.toUpperCase())) {
          console.log("good");
        } else {
          console.log(randomWord);
          console.log("bad");
          addManPart();
        }
      });
    });
  };

  return (
    <>
      {page === "Main" && (
        <div className="flex justify-evenly h-full">
          <div className="flex flex-col items-start gap-20 h-full justify-center">
            <Title value="LE PENDU" className="text-[150px]" />
            <Description value="Devinez les mots, évitez le pendu dans ce jeu classique revisité pour le web. Êtes-vous prêt pour le défi linguistique?" />
            <Button value="Jouer" onClick={handlePlay} />
          </div>
          <MainHangedMan />
        </div>
      )}

      {page === "Game" && (
        <div className="flex flex-col h-screen">
          <div className="flex h-[150px] justify-center pt-11">
            <Title value="LE PENDU" className="text-[100px]" />
          </div>
          <div className="flex flex-1 items-end justify-around">
            <GameHangedMan step={step} />
            <div className="flex gap-10 h-full items-center">
              {word.split("").map((letter, index) => (
                <Letter
                  key={index}
                  letter={letter}
                  showLetter={index == 0 || letter == word[0] ? true : false}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
