export function Post({ post }) {
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
