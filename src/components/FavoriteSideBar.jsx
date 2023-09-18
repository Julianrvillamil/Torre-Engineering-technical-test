import { HiViewList } from "react-icons/hi";

function FavoriteSideBar({ favorites }) {
  return (
    <div className="favorite-sidebar">
      <HiViewList />
      <h2>Favoritos</h2>
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
            <div>{favorite.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriteSideBar;
