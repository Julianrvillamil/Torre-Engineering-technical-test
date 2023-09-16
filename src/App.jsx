import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const updateResults = (results) => {
    setSearchResults(results); // Actualiza los resultados en el estado
  };

  return (
    <>
      <div className="search-bar-container">
        <SearchBar updateResults={updateResults} />
        <SearchResults results={searchResults} />
      </div>
    </>
  );
}

export default App;
