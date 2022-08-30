import { FC, SyntheticEvent, useState } from "react";
import CharacterStats from "../../types/characterStats";
import "./Card.sass";

type Props = {
  characterId: string;
  characterInfo: CharacterStats;
};

const Card: FC<Props> = ({ characterId, characterInfo }: Props) => {
  const [size, setSize] = useState<string>("");
  const vision = characterInfo.vision.toLowerCase();
  const weapon = characterInfo.weapon;
  const nation = characterInfo.nation;
  const constellation = characterInfo.constellation;
  const affiliation = characterInfo.affiliation;
  const birthday = characterInfo.birthday;
  const rarity = characterInfo.rarity;
  
  let stars = "";
  if (rarity === 5) stars = "⭐️⭐️⭐️⭐️⭐️" ;
  else stars = "⭐️⭐️⭐️⭐️";

  const apiURL: string = "https://api.genshin.dev/characters";
  const element: string = `https://api.genshin.dev/elements/${vision}/icon`;

  const handleImageError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    const src = event.currentTarget.src;
    event.currentTarget.src = src.replace(src, `${characterId}-portrait.png`);
  };

  const handleLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const imgWidth = event.currentTarget.clientWidth;
  
    if (imgWidth >= 500) return setSize("giga");
    else if (imgWidth >= 380 && imgWidth < 500)  return setSize("big");
    else if (imgWidth >= 290 && imgWidth < 380) return setSize("medium");
    else return setSize("small");
  }

  return (
    <div className="card">
      {characterId && (
        <div className="card-wrapper">
          <div className="card-info">
            <p className="title-name">{characterId}</p>
            <p className="text-info">
              Vision:<span className={vision}>{vision}</span>
              <img
                className="img-element"
                src={element}
                alt={vision}
                />
            </p>
            <p className="text-info">Weapon: <span className={vision}>{weapon}</span></p>
            <p className="text-info">Nation: <span className={vision}>{nation}</span></p>
            <p className="text-info">Rarity: {stars}</p>
            <p className="text-info">
              Affiliation: <span className={vision}>{affiliation}</span>
            </p>
            <p className="text-info">
              Constellation: <span className={vision}>{constellation}</span>
            </p>
            <p className="text-info">Birthday: <span className={vision}>{birthday}</span></p>
          </div>
          <img
            id="portrait"
            className={`img-portrait ${size}`}
            src={`${apiURL}/${characterId}/portrait`}
            alt="character"
            onLoad={handleLoad}
            onError={handleImageError}
          />
        </div>
      )}
    </div>
  );
};

export default Card;
