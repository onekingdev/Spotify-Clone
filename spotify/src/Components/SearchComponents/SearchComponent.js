import SearchIcon from "@mui/icons-material/Search";
import { connect } from "react-redux";
import { useState } from "react";
import { get_search_result } from "../../Actions";

const SearchComponent = (props) => {
  const [search, setSearch] = useState("");
  function handleOnSubmit(e) {
    e.preventDefault();
    props.get_search_result(search);
  }
  return (
    <div className="relative text-gray-600">
      <form
        onSubmit={(e) => {
          handleOnSubmit(e);
        }}
      >
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-full text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="click enter to search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button type="submit" className="absolute right-0 top-2 mr-4">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};
const mapStateToprops = (state) => {
  return { state: state };
};
export default connect(mapStateToprops, { get_search_result })(SearchComponent);
