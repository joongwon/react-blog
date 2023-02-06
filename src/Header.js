import styles from "./Header.module.css";
import { useBlog } from "./BlogContext";

export function Header() {
  const { postList } = useBlog();
  return (
    <header className={styles.header}>
      <h1>블로그</h1>
      <p>나만의 작은 일기장</p>
      <p>총 {postList.length}개의 글이 있습니다.</p>
    </header>
  );
}
