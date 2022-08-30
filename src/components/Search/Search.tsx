import { FC, useEffect, useState } from "react";
import getAll from "../../services/getAll";
import './Search.sass';

type Props = {
  setCharacters: (characters: string[]) => void
  characters: string[]
}

const Search: FC<Props> = ({ setCharacters, characters }: Props) => {
  const [filtered, setFiltered] = useState<string>("")
  const handleFilter = (filter: string) => {
    setFiltered(filter)
    //TODO: Fix character filter. Must filter as user types letter (onChange)
  }

  useEffect(() => {
    async function fetchData() {
      return setCharacters(await getAll());
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
          value={filtered}
          placeholder="Insert character name"
          className="input"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleFilter(event.target.value)}
        ></input>
      </label>
    </div>
  );
};

export default Search;
