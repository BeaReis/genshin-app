import { FC, SyntheticEvent } from "react";
import "./Card.sass";

type Props = {
  characterId: string;
};

const Card: FC<Props> = ({ characterId }: Props) => {
  const apiURL = "https://api.genshin.dev/characters";

  const handleImageError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    const src = event.currentTarget.src;
    event.currentTarget.src = src.replace(
      src,
      "portrait.png"
    );
  };

  return (
    <div className="card">
      {characterId && (
        <img
          className="img-portrait"
          src={`${apiURL}/${characterId}/portrait`}
          alt="character"
          onError={handleImageError}
        />
      )}
    </div>
  );
};

export default Card;
