import "./LoginPage.css";
import { Field, Form, Formik } from "formik";
import { useBlogContext } from "../contexts/BlogContext";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const { loginUser, login } = useBlogContext();
  const navigate = useNavigate();
  if (loginUser) return <div>이미 로그인되어 있습니다.</div>;
  return (
    <Formik
      initialValues={{
        name: "",
        password: "",
      }}
      onSubmit={({ name, password }) => {
        try {
          login(name, password);
          navigate("/");
        } catch (e) {
          if (e instanceof Error) alert(e.message);
        }
      }}
    >
      <Form className="LoginPage">
        <Field name="name" type="text" placeholder="이름을 입력하세요" />
        <Field
          name="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
        />
        <button type="submit">로그인</button>
      </Form>
    </Formik>
  );
}
