import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import MyContext from "./MyContext";
import { useEffect, useState } from "react";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const store = { photos, setPhotos, favorites, setFavorites };

  useEffect(() => {
    async function traerFotos() {
      const response = await fetch("/fotos.json");
      const data = await response.json();
      setPhotos(data.photos);
    }
    traerFotos();
  }, []);

  return (
    <div>
      <MyContext.Provider value={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}
