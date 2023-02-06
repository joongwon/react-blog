export function PostCreate() {
  return (
    <form>
      <input type="text" placeholder="제목을 입력하세요" />
      <textarea placeholder="내용을 입력하세요" />
      <button type="submit">작성</button>
      <button type="reset">취소</button>
    </form>
  );
}
