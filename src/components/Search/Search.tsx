import { FC, useState } from "react";
import './Search.sass';

type Props = {
  setFiltered: (characters: string) => void
  characters: string[]
}

const Search: FC<Props> = ({ setFiltered, characters }: Props) => {

  const handleFilter = (filter: string) => {
    setFiltered(filter);
  }

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
