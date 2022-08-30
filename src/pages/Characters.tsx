import { FC, useEffect, useState } from "react";
import Card from "../components/Card/Card";
import Grid from "../components/Grid/Grid";
import Search from "../components/Search/Search";
import Wrapper from "../components/Wrapper/Wrapper";
import getAllCharacters from "../services/getAllCharacters";
import getCharacterStats from "../services/getCharacterStats";
import CharacterStats from "../types/characterStats";

//TODO: Image if filter name doesn't exist


const Characters: FC = () => {
  const [characters, setCharacters] = useState<string[]>([]);
  const [filtered, setFiltered] = useState<string>("");
  const [characterId, setCharacterId] = useState<string>("");
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
  let filteredCharacters = characters;

  if(filtered) filteredCharacters = characters.filter(character => character.startsWith(filtered));

  useEffect(() => {
    async function fetchNames() {
      return setCharacters(await getAllCharacters());
    }
    if (!characters.length) fetchNames();
  });

  useEffect(() => {
    if (!characterId) return
    async function fetchCharacterInfo() {
      return setCharacterInfo(await getCharacterStats(characterId));
    }
    if(characterId !== "") fetchCharacterInfo()
  }, [characterId]);

  return (
    <>
      <Search characters={characters} setFiltered={setFiltered} />
      <Wrapper>
        <Grid characters={filteredCharacters} setCharacterId={setCharacterId} />
        <Card characterId={characterId} characterInfo={characterInfo} />
      </Wrapper>
    </>
  );
};

export default Characters;
