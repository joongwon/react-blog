import "./PostListView.css";
import { PostView } from "./PostView";

export function PostListView({ postList, deletePost }) {
  return (
    <div className="PostListView">
      {postList.length === 0 && (
        <div className="PostListView__empty">게시글이 없습니다.</div>
      )}
      {postList.map((post) => (
        <PostView key={post.id} post={post} deletePost={deletePost} />
      ))}
    </div>
  );
}
