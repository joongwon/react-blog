import "./Header.css";
import { useBlogContext } from "../contexts/BlogContext";

export function Header() {
  const { postList } = useBlogContext();
  const postCount = postList.length;
  return (
    <header className="Header">
      <h1>블로그</h1>
      <p>나만의 작은 일기장</p>
      <p>총 {postCount}개의 글이 있습니다.</p>
    </header>
  );
}
