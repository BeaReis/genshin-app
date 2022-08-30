import { FC, useEffect, useState } from "react";
import Card from "../components/Card/Card";
import Grid from "../components/Grid/Grid";
import Search from "../components/Search/Search";
import Wrapper from "../components/Wrapper/Wrapper";
import getCharacterStats from "../services/getCharacterStats";
import CharacterStats from "../types/characterStats";

const Characters: FC = () => {
  const [characterId, setCharacterId] = useState<string>("");
  const [characters, setCharacters] = useState<string[]>([]);
  const [characterInfo, setCharacterInfo] = useState<CharacterStats>({
    name: "",
    vision: "",
    weapon: "",
    nation: "",
    affiliation: "",
    rarity: 0,
    constellation: "",
    birthday: "",
    description: "",
    skillTalents: [],
    passiveTalents: [],
    constellations: [],
    vision_key: "",
    weapon_type: "",
  });

  useEffect(() => {
    async function fetchData() {
      return setCharacterInfo(await getCharacterStats(characterId));
    }
    if(characterId !== "") fetchData()
  }, [characterId]);


  return (
    <>
      <Search characters={characters} setCharacters={setCharacters}/>
      <Wrapper>
        <Grid characters={characters} setCharacterId={setCharacterId} />
        <Card characterId={characterId} characterInfo={characterInfo} />
      </Wrapper>
    </>
  );
};

export default Characters;
