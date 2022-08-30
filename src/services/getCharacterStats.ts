import CharacterStats from "../types/characterStats";

const getCharacterStats = async (id: string): Promise<CharacterStats> => {
  const url = "https://api.genshin.dev/characters";
  const response = await (
    await fetch(`${url}/${id}`)
  ).json();
  return response;
};

export default getCharacterStats;
