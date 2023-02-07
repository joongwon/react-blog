import "./Header.css";
import { Link } from "react-router-dom";
import { useBlogContext } from "../contexts/BlogContext";

export function Header() {
  const { loginUser, logout } = useBlogContext();
  return (
    <header className="Header">
      <h1>블로그</h1>
      {loginUser && <p>{loginUser.name}님 안녕하세요!</p>}
      <nav className="Header__nav">
        <Link to="/">소개</Link>
        <Link to="/post">글 목록</Link>
        <Link to="/post/create">글쓰기</Link>
        {loginUser && <button onClick={() => logout()}>로그아웃</button>}
        {!loginUser && <Link to="/login">로그인</Link>}
      </nav>
    </header>
  );
}
