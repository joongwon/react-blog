import styles from "./Post.module.css";

export function Post({ post, deletePost }) {
  return (
    <div className={styles.post}>
      <article>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </article>
      <div className={styles.buttonContainer}>
        <button
          className={styles.deleteButton}
          onClick={() => deletePost(post.id)}
        >
          삭제
        </button>
      </div>
    </div>
  );
}
