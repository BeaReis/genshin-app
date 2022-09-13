import { FC, useEffect, useState } from "react";
import Card from "../components/Card/Card";
import Grid from "../components/Grid/Grid";
import Loader from "../components/Loader/Loader";
import Search from "../components/Search/Search";
import Wrapper from "../components/Wrapper/Wrapper";
import getAllCharacters from "../services/getAllCharacters";
import getCharacterStats from "../services/getCharacterStats";
import CharacterStats from "../types/characterStats";

//TODO: Suggestion: Move all logic(functions) to parent component, leaving children to be UI components only
const Characters: FC = () => {
  const [characters, setCharacters] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [display, setDisplay] = useState<string>("");
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
  if (filtered)
    filteredCharacters = characters.filter((character) =>
      character.startsWith(filtered)
    );

  useEffect(() => {
    async function fetchNames() {
      return setCharacters(await getAllCharacters());
    }
    if (!characters.length) fetchNames();
  },[characters]);

  useEffect(() => {
    if (!characterId) return;
    if (characterId !== "") fetchCharacterInfo();
    async function fetchCharacterInfo() {
      return setCharacterInfo(await getCharacterStats(characterId));
    }
  }, [characterId]);

  useEffect(() => {
    const id = characterId.replace("-", " ");
    const name = characterInfo.name.toLowerCase();

    if(id.includes("traveler")) {
      if(!id.includes(name)) {
        setDisplay("");
        setIsLoading(true);
      }
    } else if(!name.includes(id)) {
      setDisplay("");
      setIsLoading(true);
    }
  }, [characterId, characterInfo]);

  return (
    <>
      <Search setFiltered={setFiltered} />
      <Wrapper>
        <Grid
          characters={filteredCharacters}
          characterId={characterId}
          setCharacterId={setCharacterId}
          show={show}
          setShow={setShow}
        />
          <Loader isLoading={isLoading}/>
          <Card
            display={display}
            setDisplay={setDisplay}
            setIsLoading={setIsLoading}
            characterId={characterId}
            characterInfo={characterInfo}
          />
      </Wrapper>
    </>
  );
};

export default Characters;
