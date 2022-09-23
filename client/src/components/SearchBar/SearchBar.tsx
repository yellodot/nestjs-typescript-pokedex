import "./SearchBar.css";

type SearchBarProps = {
  searchValue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({handleChange, searchValue}) => {

  return (
    <div className="search-bar-container">
      <h2>Search a pokemon by id :</h2>
      <form>
        <label>
          <input type="text" name="search-input" value={searchValue} onChange={handleChange} />
        </label>
      </form>
    </div>
  );
};

export default SearchBar;
