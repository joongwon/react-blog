import { useQuery } from "react-query";
import { getPostList } from "../lib/api";

export function AboutPage() {
  const query = useQuery("postList", () => getPostList());
  const postList = query.data;
  return (
    <article>
      <h2>저의 블로그를 소개합니다</h2>
      {postList ? (
        <p>총 {postList.length}개의 글이 있습니다.</p>
      ) : (
        <p>로딩중...</p>
      )}
    </article>
  );
}
