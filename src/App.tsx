import styles from "./App.module.css";
import { Header } from "./Header";
import { PostList } from "./PostList";
import { PostCreate } from "./PostCreate";

function App() {
  return (
    <div className={styles.app}>
      <main>
        <Header />
        <PostCreate />
        <PostList />
      </main>
    </div>
  );
}

export default App;
