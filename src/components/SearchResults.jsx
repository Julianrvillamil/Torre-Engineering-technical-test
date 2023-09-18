import { MdFavoriteBorder } from "react-icons/md";
import "../styles/SearchResults.css";

function SearchResults({ results, updateFavorites }) {
  const handleFavoriteClick = (result) => {
    // Agregar o eliminar 'result' de la lista de favoritos en 'App' (pasa una función de 'App' para hacer esto)
    updateFavorites(result);
  };
  return (
    <div className="search-results-container">
      <ul className="search-results">
        {results.map((result) => (
          <li key={result.ggId} className="search-results-li">
            <div className="search-results-img-name-pfhead">
              <div className="search-results-img">
                {result.imageUrl ? (
                  <img
                    src={result.imageUrl}
                    alt={result.name}
                    width="50"
                    height="50"
                  />
                ) : (
                  <img
                    src="https://objetivoligar.com/wp-content/uploads/2017/03/blank-profile-picture-973460_1280.jpg" // Ruta de una imagen de marcador de posición
                    alt="Imagen no disponible"
                    width="50"
                    height="50"
                  />
                )}
              </div>
              <div className="search-results-text">
                <div className="search-name">{result.name}</div>
                <div className="search-pfhead">
                  {result.professionalHeadline}
                </div>
              </div>
            </div>
            <button
              className="favorite-button"
              onClick={() => handleFavoriteClick(result)}
            >
              <MdFavoriteBorder />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
