import ArticlePreview from "./ArticlePreview";
import { Link } from "react-router-dom";

function Home({ articles, cart }) {
  return (
    <div className="homepage">
      <div className="homepage-product">
        <h2 className="center no-margin">Nos produits phares</h2>
        <div className="preview-container">
          {articles && articles.length > 0 ? (
            articles.map((article) => (
              <Link key={article.id} to={`article/${article.id}`}>
                <ArticlePreview article={article} />
              </Link>
            ))
          ) : (
            <span>Chargement...</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
