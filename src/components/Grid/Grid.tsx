import { FC, SyntheticEvent } from "react";
import "./Grid.sass";

type Props = {
  setCharacterId: (characterId: string) => void
  characters: string[]
}

const Grid: FC<Props> = ({ setCharacterId, characters }: Props) => {
  const apiUrl = "https://api.genshin.dev/characters";

  // In case icon-big doesn't exist, this function replaces src with secondary api path
  const handleImageError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = event.currentTarget.src.replace("-big", "");
  }

  const handleIconClick = (character: string) => {
    setCharacterId(character);
  }

  return (
    <div className="grid">
      {characters &&
        characters.map((character, index) => (
          <div key={index} className={`container-icon`} onClick={() => handleIconClick(character)}>
            <img className="img-icon" src={`${apiUrl}/${character}/icon-big`} alt={character} onError={handleImageError}/>
          </div>
        ))}
    </div>
  );
};

export default Grid;
