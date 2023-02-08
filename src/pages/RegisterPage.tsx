import "./RegisterPage.css";
import { Field, Form, Formik } from "formik";
import { useMutation } from "react-query";
import { useBlogContext } from "../contexts/BlogContext";
import { useNavigate } from "react-router-dom";
import { register } from "../lib/api";

export function RegisterPage() {
  const { loginInfo } = useBlogContext();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      navigate("/login");
    },
    onError: (error) => {
      alert("회원가입에 실패했습니다.");
    },
  });
  if (loginInfo) return <div>이미 로그인되어 있습니다.</div>;
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        name: "",
      }}
      onSubmit={(body) => {
        mutation.mutate(body);
      }}
    >
      <Form className="RegisterPage">
        <Field name="name" type="text" placeholder="이름을 입력하세요" />
        <Field name="email" type="email" placeholder="이메일을 입력하세요" />
        <Field
          name="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
        />
        <button type="submit">회원가입</button>
      </Form>
    </Formik>
  );
}
