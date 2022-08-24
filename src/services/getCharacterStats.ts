import { CharacterStats } from "../types/characterStats";

const getAll = async (url: string): Promise<CharacterStats> => {
  const response = await (
    await fetch(url)
  ).json();
  console.log(response);
  return response;
};

export default getAll;
