"use client";

import GameHangedMan from "@/components/Game/GameHangedMan";
import Description from "@/components/Main/Description";
import MainHangedMan from "@/components/Main/MainHangedMan";
import Title from "@/components/Main/Title";
import Button from "@/components/UI/Button";
import { useEffect, useState } from "react";

export default function Home() {
  const [page, setPage] = useState("Main");
  const [step, setStep] = useState(0);
  const [word, setWord] = useState("");

  const handlePlay = () => {
    setPage("Game");
  };

  const addManPart = () => {
    setStep(step + 1);
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/fr/word")
      .then((response) => response.json())
      .then((data) => {
        setWord(data.word);
      });
  });

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
        <div className="flex justify-center mt-11">
          <Title value="LE PENDU" className="text-[100px]" />
          <div>
            <GameHangedMan step={step} />
          </div>
        </div>
      )}
    </>
  );
}
