import React, { FC, SyntheticEvent } from "react";
import "./Grid.sass";

type Props = {
  setCharacterId: React.Dispatch<React.SetStateAction<string>>;
  characterId: string;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  characters: string[];
};

const Grid: FC<Props> = ({ setCharacterId, characterId, setShow, setIsLoading, characters }: Props) => {
  const apiUrl = "https://api.genshin.dev/characters";

  // In case icon-big doesn't exist, this function replaces src with secondary api path
  const handleImageError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = event.currentTarget.src.replace("-big", "");
  };

  const handleIconClick = (character: string) => {
    setCharacterId(character);

    if(!characterId) setShow((prevState) => !prevState);
    if(characterId === character) {
      setCharacterId("");
      setIsLoading(false);
      setShow((prevState) => !prevState);
    }
  };

  if (characters.length) {
    return (
      <div className="grid">
        {characters.map((character, index) => (
          <div
            key={index}
            className={`container-icon`}
            onClick={() => handleIconClick(character)}
          >
            <img
              className="img-icon"
              src={`${apiUrl}/${character}/icon-big`}
              alt={character}
              onError={handleImageError}
            />
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="grid grid-empty">
        <p className="text-not-found">Character doesn't exist!</p>
      </div>
    );
  }
};

export default Grid;
