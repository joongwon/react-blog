import "./App.css";
import { Header } from "./Header";
import { PostListView } from "./PostListView";
import { PostCreateForm } from "./PostCreateForm";

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <PostCreateForm />
        <PostListView />
      </main>
    </div>
  );
}

export default App;
