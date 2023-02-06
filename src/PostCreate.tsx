import styles from "./PostCreate.module.css";
import { useState } from "react";
import { useBlog } from "./BlogContext";
import { Formik, Form, Field } from "formik";

export function PostCreate() {
  const { createPost } = useBlog();
  const [isOpen, setIsOpen] = useState(false);
  return isOpen ? (
    <Formik
      initialValues={{ title: "", content: "" }}
      onSubmit={({ title, content }) => {
        createPost(title, content);
        setIsOpen(false);
      }}
      onReset={() => setIsOpen(false)}
    >
      <Form className={styles.postCreate}>
        <Field type="text" name="title" placeholder="제목을 입력하세요" />
        <Field as="textarea" name="content" placeholder="내용을 입력하세요" />
        <div className={styles.buttonsContainer}>
          <button type="submit">작성</button>
          <button type="reset">취소</button>
        </div>
      </Form>
    </Formik>
  ) : (
    <button className={styles.openButton} onClick={() => setIsOpen(true)}>
      글쓰기
    </button>
  );
}
