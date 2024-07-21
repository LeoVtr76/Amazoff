import { useState, useEffect } from "react";

const useFetchArticles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?offset=0&limit=9")
      .then((response) => response.json())
      .then((response) => setArticles(response))
      .catch((error) => console.error(error));
  }, []);
  return { articles };
};

export default useFetchArticles;
