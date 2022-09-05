import { FC } from "react";
import './Search.sass';

type Props = {
  setFiltered: (characters: string) => void
}

const Search: FC<Props> = ({ setFiltered }: Props) => {

  const handleFilter = (filter: string) => {
    setFiltered(filter);
  }

  return (
    <div className="wrapper-input">
      <label className="label" htmlFor="search">
        SELECT OR SEARCH A CHARACTER
      </label>
      <input
          id="search"
          type="text"
          placeholder="Insert character name"
          className="input"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleFilter(event.target.value)}
        ></input>
    </div>
  );
};

export default Search;
