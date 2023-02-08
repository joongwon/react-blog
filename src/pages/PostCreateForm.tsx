import "./PostCreateForm.css";
import { useNavigate } from "react-router-dom";
import { useBlogContext } from "../contexts/BlogContext";
import { Formik, Form, Field } from "formik";

export function PostCreateForm() {
  const { createPost } = useBlogContext();
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{ title: "", content: "" }}
      onSubmit={({ title, content }) => {
        createPost(title, content);
        navigate("/post");
      }}
      onReset={() => navigate("/post")}
    >
      <Form className="PostCreateForm">
        <Field name="title" type="text" placeholder="제목을 입력하세요" />
        <Field as="textarea" name="content" placeholder="내용을 입력하세요" />
        <div className="PostCreateForm__buttons">
          <button type="submit">작성</button>
          <button type="reset">취소</button>
        </div>
      </Form>
    </Formik>
  );
}
