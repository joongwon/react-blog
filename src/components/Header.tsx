import "./Header.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="Header">
      <h1>블로그</h1>
      <nav className="Header__nav">
        <Link to="/">소개</Link>
        <Link to="/post">글 목록</Link>
        <Link to="/post/create">글쓰기</Link>
      </nav>
    </header>
  );
}
