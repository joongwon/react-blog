import "./PostView.css";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { PostType } from "../contexts/BlogContext";
import { deletePost } from "../lib/api";

type PostViewProps = {
  post: PostType;
};
export function PostView({ post }: PostViewProps) {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      navigate("/post");
    },
    onError: () => {
      alert("삭제에 실패했습니다.");
    },
  });
  return (
    <div className="PostView">
      <article>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </article>
      <div className="PostView__buttons">
        <button
          className="PostView__delete"
          onClick={() => {
            mutation.mutate(post.id);
          }}
        >
          삭제
        </button>
      </div>
    </div>
  );
}
