import "./PostListView.css";
import { useBlogContext } from "../contexts/BlogContext";
import { PostView } from "../components/PostView";

export function PostListView() {
  const { postList } = useBlogContext();
  return (
    <div className="PostListView">
      {postList.length === 0 && (
        <div className="PostListView__empty">게시글이 없습니다.</div>
      )}
      {postList.map((post) => (
        <PostView key={post.id} post={post} />
      ))}
    </div>
  );
}
