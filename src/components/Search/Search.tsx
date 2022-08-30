import { FC, useEffect, useState } from "react";
import getAll from "../../services/getAll";
import './Search.sass';

type Props = {
  setCharacters: (characters: string[]) => void
  characters: string[]
}

const Search: FC<Props> = ({ setCharacters, characters }: Props) => {
  const [allCharacters, setAllCharacters] = useState<string[]>([])
  const handleFilter = (filter: string) => {
    //TODO: Fix character filter. Must filter as user types letter (onChange)
  }

  useEffect(() => {
    async function fetchData() {
      
      return setAllCharacters(await getAll());
    }
    if (!characters.length) fetchData();
  });
  

  return (
    <div className="wrapper-input">
      <label className="label">
        SELECT OR SEARCH A CHARACTER
        <input
          id="search"
          type="text"
          placeholder="Insert character name"
          className="input"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleFilter(event.target.value)}
        ></input>
      </label>
    </div>
  );
};

export default Search;
