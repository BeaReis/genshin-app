import { FC, SyntheticEvent } from "react";
import "./Grid.sass";

type Props = {
  setCharacterId: (characterId: string) => void;
  characterId: string;
  setShow: (show: Boolean) => void;
  show: Boolean;
  characters: string[];
};

const Grid: FC<Props> = ({ setCharacterId, characterId, setShow, show, characters }: Props) => {
  const apiUrl = "https://api.genshin.dev/characters";

  // In case icon-big doesn't exist, this function replaces src with secondary api path
  const handleImageError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = event.currentTarget.src.replace("-big", "");
  };

  const handleIconClick = (character: string) => {
    setCharacterId(character);

    if(!characterId) setShow(!show);
    if(characterId === character) {
      setCharacterId("");
      setShow(!show);
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
