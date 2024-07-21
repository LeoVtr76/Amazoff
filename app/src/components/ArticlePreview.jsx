function ArticlePreview({ article }) {
  return (
    <div className="preview">
      <div className="preview-image-container">
        <img src={article.image} alt="article image" />
      </div>
      <span>{article.title}</span>
      <span>{article.price} $</span>
    </div>
  );
}
export default ArticlePreview;
