import styles from "./PostList.module.css";
import { Post } from "./Post";
import { useBlog } from "./BlogContext";

export function PostList() {
  const { postList } = useBlog();
  return (
    <div className={styles.postList}>
      {postList.length === 0 && (
        <div className={styles.empty}>게시글이 없습니다.</div>
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
