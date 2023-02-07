import "./PostItem.css";
import { Link } from "react-router-dom";
import { PostType } from "../contexts/BlogContext";

type PostItemProps = {
  post: PostType;
};
export function PostItem({ post }: PostItemProps) {
  return (
    <Link className="post-item" to={`/post/${post.id}`}>
      {post.title}
    </Link>
  );
}
