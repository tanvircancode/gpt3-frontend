import Article from "../../components/article/Article";
import "./blog.css";
import { blog1, blog2, blog3, blog4, blog5 } from "./imports";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading --gradient-text">
        A lot is happening, <br />
        We are blogging about it.
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            imgUrl={blog1}
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            imgUrl={blog2}
          />
          <Article
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            imgUrl={blog3}
          />
          <Article
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            imgUrl={blog4}
          />
          <Article
            date="Sep 26, 2021"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            imgUrl={blog5}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
