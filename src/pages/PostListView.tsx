import "./PostListView.css";
import { PostItem } from "../components/PostItem";
import { useBlogContext } from "../contexts/BlogContext";

export function PostListView() {
  const { postList } = useBlogContext();
  return (
    <div className="PostListView">
      {postList.length === 0 && (
        <div className="PostListView__empty">게시글이 없습니다.</div>
      )}
      {postList.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}
