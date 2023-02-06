import "./App.css";
import { Header } from "./Header";
import { PostList } from "./PostList";
import { PostCreate } from "./PostCreate";

function App() {
  return (
    <main>
      <Header />
      <PostCreate />
      <PostList />
    </main>
  );
}

export default App;
