import "./Header.css";
import { Link } from "react-router-dom";
import { useBlogContext } from "../contexts/BlogContext";

export function Header() {
  const { loginInfo, setLoginInfo } = useBlogContext();
  return (
    <header className="Header">
      <h1>블로그</h1>
      {loginInfo && <p>{loginInfo.user.name}님 안녕하세요</p>}
      <nav className="Header__nav">
        <Link to="/">소개</Link>
        <Link to="/post">글 목록</Link>
        {loginInfo && <Link to="/post/create">글쓰기</Link>}
        {loginInfo && (
          <button onClick={() => setLoginInfo(null)}>로그아웃</button>
        )}
        {!loginInfo && <Link to="/login">로그인</Link>}
        {!loginInfo && <Link to="/register">회원가입</Link>}
      </nav>
    </header>
  );
}
