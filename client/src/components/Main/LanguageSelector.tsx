import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import FlagIcon from "../UI/FlagIcon";

type Props = {
  language: { code: string; language: string };
  setLanguage: (code: string, language: string) => void;
};

const LanguageSelector: React.FC<Props> = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    {
      code: "fr",
      language: "FR",
    },
    {
      code: "us",
      language: "EN",
    },
  ];

  return (
    <>
      <div
        className="absolute bottom-4 right-4 flex h-12
                  cursor-pointer select-none 
                  flex-row items-center 
                  justify-center gap-1 rounded-lg 
                  border p-2 shadow-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FlagIcon code={language.code} className="size-7 rounded-[4px]" />
        <p className="text-xl text-black">{language.language}</p>
        <IoIosArrowUp size={24} />
      </div>

      {isOpen && (
        <div className="absolute bottom-16 right-4 flex flex-col gap-1 rounded-lg border bg-white shadow-sm">
          {languages.map((lang) => (
            <div
              key={lang.code}
              className="flex cursor-pointer flex-row gap-1 p-2 hover:bg-gray-200"
              onClick={() => {
                setLanguage(lang.code, lang.language);
                setIsOpen(false);
              }}
            >
              <FlagIcon code={lang.code} className="size-7 rounded-[4px]" />
              <p className="text-xl text-black">{lang.language}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default LanguageSelector;
