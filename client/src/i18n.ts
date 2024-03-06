import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const language =
  typeof navigator !== "undefined" ? navigator.language : "en-US";

const getLanguage = () => {
  return language.split("-")[0].toLowerCase().toString();
};

i18n.use(initReactI18next).init({
  lng: getLanguage(),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        title: "The Hanged Man",
        description:
          "Guess the words, avoid the man getting hanged in this classic game revisited for the web. Are you ready for the language challenge?",
        play: "Play",
        congrats: "CONGRATULATIONS",
        score: "You have scored ",
        loose: "YOU LOST",
        tooBad: "Too bad! The word was ",
        nextTime: " Next time will be the good one",
        replay: "Replay",
      },
    },
    fr: {
      translation: {
        title: "Le Pendu",
        description:
          "Devinez les mots, évitez le pendu dans ce jeu classique revisité pour le web. Êtes-vous prêt pour le défi linguistique?",
        play: "Jouer",
        congrats: "BRAVO",
        score: "Tu as obtenu un score de ",
        loose: "PERDU",
        tooBad: "Dommage ! Le mot était ",
        nextTime: " La prochaine fois sera la bonne",
        replay: "Rejouer",
      },
    },
  },
});

export default i18n;
