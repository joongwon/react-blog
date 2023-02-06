import styles from "./Header.module.css";

type HeaderProps = {
  postCount: number;
};

export function Header({ postCount }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1>블로그</h1>
      <p>나만의 작은 일기장</p>
      <p>총 {postCount}개의 글이 있습니다.</p>
    </header>
  );
}
