"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import GameHangedMan from "./components/Game/GameHangedMan";
import Letter from "./components/Game/Letter";
import Popup from "./components/Game/Popup";
import WrongLetters from "./components/Game/WrongLetters";
import Description from "./components/Main/Description";
import LanguageSelector from "./components/Main/LanguageSelector";
import MainHangedMan from "./components/Main/MainHangedMan";
import Title from "./components/Main/Title";
import Button from "./components/UI/Button";
import Loader from "./components/UI/Loader";

const language =
  typeof navigator !== "undefined" ? navigator.language : "en-US";

const isALetter = (l: string) => {
  return l.length === 1 && l.match(/[a-zA-Z]/i);
};

const getCodeLanguage = () => {
  return language.split("-")[1].toLowerCase();
};

const getLanguage = () => {
  return language.split("-")[0].toUpperCase();
};

export default function Home() {
  const [page, setPage] = useState("Main");
  const [step, setStep] = useState(0);
  const [word, setWord] = useState("");
  const [guessedLetter, setGuessedLetter] = useState("");
  const [rightLetters, setRightLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [victory, setVictory] = useState(false);
  const [language, setLanguage] = useState({
    code: getCodeLanguage(),
    language: getLanguage(),
  });
  const wordLetters = word.split("");

  const handlePlay = () => {
    setPage("Loading");
    setGameOver(false);
    setVictory(false);
    setStep(0);
    setRightLetters([]);
    setWrongLetters([]);
    setGuessedLetter("");
    if (language.code === "fr") {
      axios
        .get("https://the-hanged-man.onrender.com/api/fr/word")
        .then((response) => {
          setPage("Game");
          const randomWord = response.data.word.toUpperCase();
          setWord(randomWord);
        });
    } else if (language.code === "us") {
      axios
        .get("https://the-hanged-man.onrender.com/api/en/word")
        .then((response) => {
          setPage("Game");
          const randomWord = response.data.word.toUpperCase();
          setWord(randomWord);
        });
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    const guessLetter = e.key.toUpperCase();
    setGuessedLetter(guessLetter);
  };

  const getScore = () => {
    const score = 100 - (100 * step) / 6;
    return Math.round(score);
  };

  const addManPart = () => {
    setStep((prevStep) => prevStep + 1);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    if (!rightLetters.includes(word[0])) {
      setRightLetters((prevLetters) => [...prevLetters, word[0]]);
    }
  }, [word]);

  useEffect(() => {
    if (!isALetter(guessedLetter) || gameOver || victory) return;

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
  }, [guessedLetter]);

  useEffect(() => {
    if (step >= 6) {
      setGameOver(true);
    }
  }, [wrongLetters]);

  useEffect(() => {
    wordLetters.map((letter) => {
      if (!rightLetters.includes(letter)) return;
      if (wordLetters.every((l) => rightLetters.includes(l))) {
        setVictory(true);
      }
    });
  }, [rightLetters]);

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
          <LanguageSelector
            language={language}
            setLanguage={(code, language) => setLanguage({ code, language })}
          />
        </div>
      )}

      {page === "Loading" && (
        <div className="flex justify-center items-center h-full">
          <Loader value="Chargement..." />
        </div>
      )}

      {page === "Game" && (
        <div className="flex h-full flex-col">
          <div
            className="flex h-[150px] cursor-pointer select-none justify-center pt-11"
            onClick={() => setPage("Main")}
          >
            <Title value="LE PENDU" className="text-[100px]" />
          </div>
          <div className="flex flex-1 items-end justify-around">
            <GameHangedMan step={step} />
            <div className="relative flex h-full items-end">
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 items-center gap-10">
                {wordLetters.map((letter, index) => (
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
          {gameOver && <Popup gameOver word={word} replay={handlePlay} />}
          {victory && (
            <Popup gameOver={false} score={getScore()} replay={handlePlay} />
          )}
        </div>
      )}
    </>
  );
}
