import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";
import Home from "./Home";
import Header from "./Header";

function App() {
  const [articles, setArticles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?offset=0&limit=9")
      .then((response) => response.json())
      .then((response) => setArticles(response))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <Header />
      <Home articles={articles} cart={cart} />
    </>
  );
}

export default App;
