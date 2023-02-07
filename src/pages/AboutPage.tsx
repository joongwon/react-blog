import { useBlogContext } from "../contexts/BlogContext";

export function AboutPage() {
  const { postList } = useBlogContext();
  const postCount = postList.length;
  return (
    <article>
      <h2>저의 블로그를 소개합니다</h2>
      <p>총 {postCount}개의 글이 있습니다.</p>
    </article>
  );
}
