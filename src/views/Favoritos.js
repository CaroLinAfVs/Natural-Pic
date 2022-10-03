import { useContext } from "react";
import MyContext from "../MyContext";

export default function Favoritos() {
  const state = useContext(MyContext);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {state.favorites.map((favorite) => (
          <img src={favorite.src.original} />
        ))}
      </div>
    </div>
  );
}
