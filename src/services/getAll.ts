import { Character } from "../types/characters";

const getAll = async (url: string): Promise<Character> => {
  const response = await (
    await fetch(url)
  ).json();
  console.log(response);
  return response;
};

export default getAll;
