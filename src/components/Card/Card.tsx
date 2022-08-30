import { FC, SyntheticEvent } from "react";
import CharacterStats from "../../types/characterStats";
import "./Card.sass";

type Props = {
  characterId: string;
  characterInfo: CharacterStats;
};

//TODO: Fix characters img position. Must change position according to width of image.
//TODO: Limit card text info to 66% max of card space
const Card: FC<Props> = ({ characterId, characterInfo }: Props) => {
  const vision = characterInfo.vision.toLowerCase();
  const weapon = characterInfo.weapon;
  const nation = characterInfo.nation;
  const constellation = characterInfo.constellation;
  const affiliation = characterInfo.affiliation;
  const birthday = characterInfo.birthday;
  
  const apiURL = "https://api.genshin.dev/characters";

  const element = `https://api.genshin.dev/elements/${vision}/icon`;

  const handleImageError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    const src = event.currentTarget.src;
    event.currentTarget.src = src.replace(src, `${characterId}-portrait.png`);
  };

  return (
    <div className="card">
      {characterId && (
        <div className="card-wrapper">
          <div className="card-info">
            <p className="title-name">{characterId}</p>
            <p className="text-info">
              Vision:<p className={vision}>{vision}</p>
              <img
                className="img-element"
                src={element}
                alt={characterInfo.vision}
                />
            </p>
            <p className="text-info">Weapon: <p className={vision}>{weapon}</p></p>
            <p className="text-info">Nation: <p className={vision}>{nation}</p></p>
            <p className="text-info">Rarity: {characterInfo.rarity}</p>
            <p className="text-info">
              Affiliation: <p className={vision}>{affiliation}</p>
            </p>
            <p className="text-info">
              Constellation: <p className={vision}>{constellation}</p>
            </p>
            <p className="text-info">Birthday: <p className={vision}>{birthday}</p></p>
          </div>
          <img
            className="img-portrait"
            src={`${apiURL}/${characterId}/portrait`}
            alt="character"
            onError={handleImageError}
          />
        </div>
      )}
    </div>
  );
};

export default Card;
