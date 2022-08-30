const getAllCharacters = async (): Promise<string[]> => {
  const url = "https://api.genshin.dev/characters";
  const response = await (
    await fetch(url)
  ).json();
  return response;
};

export default getAllCharacters;
