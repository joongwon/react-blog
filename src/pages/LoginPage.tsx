import "./LoginPage.css";
import { Field, Form, Formik } from "formik";
import { useMutation } from "react-query";
import { useBlogContext } from "../contexts/BlogContext";
import { useNavigate } from "react-router-dom";
import { login } from "../lib/api";

export function LoginPage() {
  const { loginInfo, setLoginInfo } = useBlogContext();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setLoginInfo(data);
      navigate("/");
    },
    onError: (error) => {
      alert("로그인에 실패했습니다.");
    },
  });
  if (loginInfo) return <div>이미 로그인되어 있습니다.</div>;
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={({ email, password }) => {
        mutation.mutate({ email, password });
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
