import { FC } from "react";
import './Search.sass';

const Search: FC = () => {
  return (
    <div className="wrapper-input">
      <label className="label">
        SELECT OR SEARCH A CHARACTER
        <input
          id="search"
          type="text"
          placeholder="Insert character name"
          className="input"
        ></input>
      </label>
    </div>
  );
};

export default Search;
