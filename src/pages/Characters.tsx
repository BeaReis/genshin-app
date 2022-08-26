import { FC, useState } from "react";
import Card from "../components/Card/Card";
import Grid from "../components/Grid/Grid";
import Search from "../components/Search/Search";
import Wrapper from "../components/Wrapper/Wrapper";

const Characters: FC = () => {
  const [characterId, setCharacterId] = useState<string>("");

  return (
    <>
      <Search />
      <Wrapper>
        <Grid setCharacterId={setCharacterId} />
        <Card characterId={characterId} />
      </Wrapper>
    </>
  );
};

export default Characters;
