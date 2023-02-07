import "./PostCreateForm.css";
import { useState } from "react";

export function PostCreateForm({ createPost }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return isOpen ? (
    <form
      className="PostCreateForm"
      onReset={() => setIsOpen(false)}
      onSubmit={(e) => {
        e.preventDefault();
        createPost(title, content);
        setIsOpen(false);
      }}
    >
      <input
        type="text"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="내용을 입력하세요"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="PostCreateForm__buttons">
        <button type="submit">작성</button>
        <button type="reset">취소</button>
      </div>
    </form>
  ) : (
    <button className="PostCreateForm__open" onClick={() => setIsOpen(true)}>
      글쓰기
    </button>
  );
}
