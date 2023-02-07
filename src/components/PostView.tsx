import "./PostView.css";
import { useBlogContext } from "../contexts/BlogContext";

export function PostView({ post }) {
  const { deletePost } = useBlogContext();
  return (
    <div className="post">
      <article>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </article>
      <div className="post__buttons">
        <button className="post__delete" onClick={() => deletePost(post.id)}>
          삭제
        </button>
      </div>
    </div>
  );
}
