import styles from "./PostList.module.css";
import { Post } from "./Post";

export function PostList({ postList, deletePost }) {
  return (
    <div className={styles.postList}>
      {postList.length === 0 && (
        <div className={styles.empty}>게시글이 없습니다.</div>
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} deletePost={deletePost} />
      ))}
    </div>
  );
}
