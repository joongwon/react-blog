import "./PostView.css";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { PostType, useBlogContext } from "../contexts/BlogContext";
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
  const { loginInfo } = useBlogContext();
  return (
    <div className="PostView">
      <article>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </article>
      <div className="PostView__buttons">
        {loginInfo?.user.id === post.author.id && (
          <button
            className="PostView__delete"
            onClick={() => {
              mutation.mutate({ id: post.id, token: loginInfo?.token });
            }}
          >
            삭제
          </button>
        )}
      </div>
    </div>
  );
}
