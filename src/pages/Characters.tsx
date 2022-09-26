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

  const fetchNames = async () => {
    const allCharacters = await getAllCharacters();
    setCharacters(allCharacters);
  };
  if (!characters.length) fetchNames();

  useEffect(() => {
    if (!characterId) return;
    const fetchCharacterInfo = async () => {
      const characterStats = await getCharacterStats(characterId);
      setCharacterInfo(characterStats);
    };
    fetchCharacterInfo();
  }, [characterId]);

  useEffect(() => {
    const id = characterId.replace("-", " ");
    const name = characterInfo.name.toLowerCase();
    if (id.includes("traveler")) {
      if (!id.includes(name)) {
        setShow(false);
        setIsLoading(true);
      }
    } else if (!name.includes(id)) {
      setShow(false);
      setIsLoading(true);
    }
  }, [characterId, characterInfo])

  return (
    <>
      <Search setFiltered={setFiltered} />
      <Wrapper>
        <Grid
          characters={filteredCharacters}
          characterId={characterId}
          setCharacterId={setCharacterId}
          setShow={setShow}
          setIsLoading={setIsLoading}
        />
        <Loader isLoading={isLoading} />
        <Card
          show={show}
          setShow={setShow}
          setIsLoading={setIsLoading}
          characterId={characterId}
          characterInfo={characterInfo}
        />
      </Wrapper>
    </>
  );
};

export default Characters;
