import { PostType } from "./types";
import styles from "./Post.module.css";

type PostProps = {
  post: PostType;
  deletePost: (id: number) => void;
};

export function Post({ post, deletePost }: PostProps) {
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
