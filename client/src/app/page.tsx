"use client";

import GameHangedMan from "@/components/Game/GameHangedMan";
import Letter from "@/components/Game/Letter";
import WrongLetters from "@/components/Game/WrongLetters";
import Description from "@/components/Main/Description";
import MainHangedMan from "@/components/Main/MainHangedMan";
import Title from "@/components/Main/Title";
import Button from "@/components/UI/Button";
import axios from "axios";
import { useEffect, useState } from "react";

const isALetter = (l: string) => {
  return l.length === 1 && l.match(/[a-zA-Z]/i);
};

export default function Home() {
  const [page, setPage] = useState("Main");
  const [step, setStep] = useState(0);
  const [word, setWord] = useState("");
  const [guessedLetter, setGuessedLetter] = useState("");
  const [rightLetters, setRightLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [gameOver, setGameOver] = useState(false);

  const handleKeyDown = (e: KeyboardEvent) => {
    const guessLetter = e.key.toUpperCase();
    setGuessedLetter(guessLetter);
  };

  const handlePlay = () => {
    axios.get("http://localhost:8080/api/fr/word").then((response) => {
      const randomWord = response.data.word.toUpperCase();
      setWord(randomWord);
      setPage("Game");

      window.addEventListener("keydown", handleKeyDown);
    });
  };

  const addManPart = () => {
    setStep((prevStep) => prevStep + 1);
  };

  useEffect(() => {
    if (!rightLetters.includes(word[0])) {
      setRightLetters((prevLetters) => [...prevLetters, word[0]]);
    }

    if (!isALetter(guessedLetter)) return;

    if (word.includes(guessedLetter) && !rightLetters.includes(guessedLetter)) {
      setRightLetters((prevLetters) => {
        const newLetters = [...prevLetters, guessedLetter];
        return newLetters;
      });
    } else if (
      !word.includes(guessedLetter) &&
      !wrongLetters.includes(guessedLetter)
    ) {
      setWrongLetters((prevLetters) => [...prevLetters, guessedLetter]);
      addManPart();
    }

    if (step == 6) {
      setGameOver(true);
    }

    if (gameOver) {
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, [word, guessedLetter]);

  return (
    <>
      {page === "Main" && (
        <div className="flex h-full justify-evenly">
          <div className="flex h-full flex-col items-start justify-center gap-20">
            <Title value="LE PENDU" className="text-[150px]" />
            <Description value="Devinez les mots, évitez le pendu dans ce jeu classique revisité pour le web. Êtes-vous prêt pour le défi linguistique?" />
            <Button value="Jouer" onClick={handlePlay} />
          </div>
          <MainHangedMan />
        </div>
      )}

      {page === "Game" && (
        <div className="flex h-screen flex-col">
          <div className="flex h-[150px] justify-center pt-11">
            <Title value="LE PENDU" className="text-[100px]" />
          </div>
          <div className="flex flex-1 items-end justify-around">
            <GameHangedMan step={step} />
            <div className="relative flex h-full items-end">
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 items-center gap-10">
                {word.split("").map((letter, index) => (
                  <Letter
                    key={index}
                    letter={letter}
                    showLetter={rightLetters.includes(letter)}
                  />
                ))}
              </div>
              <WrongLetters wrongLetters={wrongLetters} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
