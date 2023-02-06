import "./App.css";

function Header() {
  return (
    <header>
      <h1>블로그</h1>
      <p>나만의 작은 일기장</p>
    </header>
  );
}

function PostList() {
  return (
    <div>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

function Post() {
  return (
    <div>
      <article>
        <h2>리액트 배우기</h2>
        <p>리액트는 너무 재밌다!</p>
      </article>
      <button>삭제</button>
    </div>
  );
}

function PostCreate() {
  return (
    <form>
      <input type="text" placeholder="제목을 입력하세요" />
      <textarea placeholder="내용을 입력하세요" />
      <button type="submit">작성</button>
      <button type="reset">취소</button>
    </form>
  );
}

function App() {
  return (
    <main>
      <Header />
      <PostCreate />
      <PostList />
    </main>
  );
}

export default App;
