import styles from "./PostList.module.css";
import { PostType } from "./types";
import { Post } from "./Post";

type PostListProps = {
  postList: PostType[];
  deletePost: (id: number) => void;
};

export function PostList({ postList, deletePost }: PostListProps) {
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
