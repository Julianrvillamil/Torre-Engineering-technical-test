import { GrFavorite } from "react-icons/gr";

function SearchResults({ results, updateFavorites }) {
  const handleFavoriteClick = (result) => {
    // Agregar o eliminar 'result' de la lista de favoritos en 'App' (pasa una función de 'App' para hacer esto)
    updateFavorites(result);
  };
  return (
    <div className="search-results">
      <ul>
        {results.map((result) => (
          <li key={result.ggId}>
            <div>
              <img
                src={result.imageUrl}
                alt={result.name}
                width="50"
                height="50"
              />
            </div>
            <div>{result.name}</div>
            <button
              className="favorite-button"
              onClick={() => handleFavoriteClick(result)}
            >
              <GrFavorite />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
