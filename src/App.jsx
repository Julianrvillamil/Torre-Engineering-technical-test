import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import FavoriteSideBar from "./components/FavoriteSideBar";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || [] // Cargar favoritos almacenados en LocalStorage
  );

  const updateResults = (results) => {
    setSearchResults(results); // Actualiza los resultados en el estado
  };

  const updateFavorites = (result) => {
    // Comprueba si 'result' ya está en la lista de favoritos
    const isFavorite = favorites.some(
      (favorite) => favorite.ggId === result.ggId
    );

    if (isFavorite) {
      // Si 'result' ya es un favorito, elimínalo de la lista
      const updatedFavorites = favorites.filter(
        (favorite) => favorite.ggId !== result.ggId
      );
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Actualiza el localStorage
    } else {
      // Si 'result' no es un favorito, agrégalo a la lista
      const updatedFavorites = [...favorites, result];
      setFavorites(updatedFavorites);

      // Guardar la lista de favoritos en LocalStorage
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  return (
    <div className="app-container">
      <FavoriteSideBar favorites={favorites} />
      <div className="search-bar-container">
        <SearchBar updateResults={updateResults} />
        <SearchResults
          results={searchResults}
          updateFavorites={updateFavorites}
        />
      </div>
    </div>
  );
}

export default App;
