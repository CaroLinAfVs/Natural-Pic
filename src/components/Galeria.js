import "../assets/css/galeria.css";
import Card from "./Card";

import { useContext } from "react";
import MyContext from "../MyContext";

export default function Home() {
  const state = useContext(MyContext);

  return (
    <div className="galeria grid-columns-5 p-3">
      {state.photos.map((photo, i) => (
        <div key={i}>
          <Card
            url={photo.src.portrait}
            alt={photo.alt}
            isFav={state.favorites.find((favorite) => favorite.id === photo.id)}
            onClick={() => {
              const favoriteFounded = state.favorites.find(
                (favorite) => favorite.id === photo.id
              );

              if (!favoriteFounded) {
                state.setFavorites([...state.favorites, photo]);
                return;
              }

              const newFavorites = state.favorites.filter(
                (favorite) => favorite.id !== photo.id
              );

              state.setFavorites(newFavorites);
            }}
          />
        </div>
      ))}
    </div>
  );
}
