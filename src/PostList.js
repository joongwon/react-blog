import { Post } from "./Post";

export function PostList() {
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
