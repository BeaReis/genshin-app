import { FC, SyntheticEvent, useEffect, useState } from "react";
import getAll from "../../services/getAll";
import "./Grid.sass";

type Props = {
  setCharacterId: (characterId: string) => void
}


const Grid: FC<Props> = ({ setCharacterId }: Props) => {
  const [characters, setCharacters] = useState<string[]>([]);
  const apiUrl = "https://api.genshin.dev/characters";

  async function fetchData() {
    return setCharacters(await getAll());
  }

  useEffect(() => {
    if (!characters.length) fetchData();
  });
  
  // In case 
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
