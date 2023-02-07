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
        email: "",
        password: "",
      }}
      onSubmit={({ email, password }) => {
        try {
          login(email, password);
          navigate("/");
        } catch (e) {
          if (e instanceof Error) alert(e.message);
        }
      }}
    >
      <Form className="LoginPage">
        <Field name="email" type="email" placeholder="이메일을 입력하세요" />
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
