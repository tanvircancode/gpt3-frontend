import "./article.css";

const Article = ({ imgUrl, date, text }) => {
  return (
    <div className="gpt3__article">
      <div className="gpt3__article-img">
        <img src={imgUrl} alt="Article Image" />
      </div>
      <div className="gpt3__article-content">
        <div className="gpt3__article-content_groupA">
          <p>{date}</p>
          <h4>{text}</h4>
        </div>

        <div className="gpt3__article-content_groupB">
          <p>Read Full Article</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
