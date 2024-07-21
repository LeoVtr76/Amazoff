import { useContext, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Header from "./Header";
import { CartContext } from "./CartContext";
function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((response) => setArticle(response))
      .catch((error) => console.error(error));
  }, []);
  const handleQuantityChanged = (value) => {
    if (value <= 1) value = 1;
    setQuantity(value);
  };
  return (
    <>
      <Header />
      {article && (
        <>
          <div className="article">
            <div className="article-image-container">
              <div className="preview-image-container">
                <img src={article.image} alt="article image" />
              </div>
            </div>
            <div className="article-desc-container">
              <h2>{article.title}</h2>
              <span>{article.price} $</span>
              <p>{article.description}</p>
              <div className="article-desc-quantity">
                <span>Quantity</span>
                <div className="article-desc-quantity-input">
                  <button
                    onClick={() => {
                      handleQuantityChanged(quantity - 1);
                    }}
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={() => {
                      handleQuantityChanged(quantity + 1);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <button onClick={() => addToCart(article, quantity)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default Article;
