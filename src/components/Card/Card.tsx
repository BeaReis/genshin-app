import { FC, SyntheticEvent, useState, useEffect } from "react";
import CharacterStats from "../../types/characterStats";
import "./Card.sass";

type Props = {
  characterId: string;
  characterInfo: CharacterStats;
  display: string;
  setDisplay: (display: string) => void;
  setIsLoading: (isLoading: boolean) => void;
};

const Card: FC<Props> = ({
  characterId,
  characterInfo,
  display,
  setDisplay,
  setIsLoading,
}: Props) => {
  const [size, setSize] = useState<string>("");
  const vision = characterInfo.vision.toLowerCase();
  const weapon = characterInfo.weapon;
  const nation = characterInfo.nation;
  const constellation = characterInfo.constellation;
  const affiliation = characterInfo.affiliation;
  const birthday = characterInfo.birthday;
  const rarity = characterInfo.rarity;
  let date: string;
  if (birthday) {
    const [year, month, day] = birthday.split("-");
    date = [day, month].join("/");
  } else {
    date = "Unknown";
  }
  const apiURL: string = "https://api.genshin.dev/characters";
  const visionIconURL: string = `https://api.genshin.dev/elements/${vision}/icon`;
  const characterImg = `${apiURL}/${characterId}/portrait`;

  let stars = "";
  if (rarity === 5) stars = "⭐️⭐️⭐️⭐️⭐️";
  else stars = "⭐️⭐️⭐️⭐️";

  const handleImageError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    const src = event.currentTarget.src;
    if (characterId === "yae-miko")
      event.currentTarget.src = src.replace(
        src,
        `https://raw.githubusercontent.com/BeaReis/genshin-app/main/public/yae-miko-portrait.png`
      );
  };

  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const width = event.currentTarget.clientWidth;

    if (width >= 500) setSize("giga");
    else if (width >= 380 && width < 500) setSize("big");
    else if (width >= 290 && width < 380) setSize("medium");
    else setSize("small");

    setIsLoading(false);
    setDisplay("card--show"); 
  };

  return (
    <div className={`card ${display}`}>
      {characterId && (
        <div className="card-wrapper">
          <div className="card-info">
            <p className="title">{characterId}</p>
            <p className="text-info">
              Vision:<span className={vision}>{vision}</span>
              <img className="img-element" src={visionIconURL} alt={vision} />
            </p>
            <p className="text-info">
              Weapon: <span className={vision}>{weapon}</span>
            </p>
            <p className="text-info">
              Nation: <span className={vision}>{nation}</span>
            </p>
            <p className="text-info">Rarity: {stars}</p>
            <p className="text-info">
              Affiliation: <span className={vision}>{affiliation}</span>
            </p>
            <p className="text-info">
              Constellation: <span className={vision}>{constellation}</span>
            </p>
            <p className="text-info">
              Birthday: <span className={vision}>{date}</span>
            </p>
          </div>
          <img
            id="portrait"
            className={`img-portrait ${size}`}
            src={characterImg}
            alt={`${characterId} full body`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        </div>
      )}
    </div>
  );
};

export default Card;
