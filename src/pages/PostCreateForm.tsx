import "./PostCreateForm.css";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { createPost } from "../lib/api";

export function PostCreateForm() {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: (post) => {
      navigate(`/post/${post.id}`);
    },
    onError: () => {
      alert("저장에 실패했습니다.");
    },
  });
  return (
    <Formik
      initialValues={{ title: "", content: "" }}
      onSubmit={({ title, content }) => {
        mutation.mutate({ title, content });
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
