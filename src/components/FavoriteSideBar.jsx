import { HiViewList } from "react-icons/hi";
import "../styles/FavoriteSideBar.css";

function FavoriteSideBar({ favorites }) {
  return (
    <div className="favorite-sidebar">
      <div className="favorite-header">
        <HiViewList />
        <h2>Favoritos</h2>
      </div>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.ggId}>
            <div>
              <img
                src={favorite.imageUrl}
                alt={favorite.name}
                width="50"
                height="50"
              />
            </div>
            <div className="search-results-text">
              <div>{favorite.name}</div>
              <div className="search-pfhead">
                {favorite.professionalHeadline}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriteSideBar;
