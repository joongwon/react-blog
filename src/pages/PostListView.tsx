import "./PostListView.css";
import { useQuery } from "react-query";
import { PostItem } from "../components/PostItem";
import { getPostList } from "../lib/api";

export function PostListView() {
  const query = useQuery("postList", () => getPostList());
  const postList = query.data;
  if (!postList) return <div>로딩중...</div>;
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
