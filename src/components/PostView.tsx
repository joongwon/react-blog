import "./PostView.css";
import { useNavigate } from "react-router-dom";
import { PostType, useBlogContext } from "../contexts/BlogContext";

type PostViewProps = {
  post: PostType;
};
export function PostView({ post }: PostViewProps) {
  const { deletePost } = useBlogContext();
  const navigate = useNavigate();
  return (
    <div className="post">
      <article>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </article>
      <div className="post__buttons">
        <button
          className="post__delete"
          onClick={() => {
            deletePost(post.id);
            navigate("/post");
          }}
        >
          삭제
        </button>
      </div>
    </div>
  );
}
