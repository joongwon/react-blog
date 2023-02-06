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
  const posts = [
    { id: 1, title: "리액트", content: "리액트는 너무 재밌다!" },
    { id: 2, title: "오늘의 영상", content: "NYC A-Train Sax Battle" },
    { id: 3, title: "첫번째 글", content: "안녕하세요~~" },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

function Post({ post }) {
  return (
    <div>
      <article>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
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
