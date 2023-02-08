import axios from "axios";
import { LoginInfoType, PostType } from "../contexts/BlogContext";

const url = "https://api2.freleefty.org";
export function getPostList() {
  return axios.get<PostType[]>(`${url}/post`).then((res) => res.data);
}

export function getPost(id: number) {
  return axios.get<PostType>(`${url}/post/${id}`).then((res) => res.data);
}

type CreatePostBody = {
  title: string;
  content: string;
  token: string;
};

export function createPost(body: CreatePostBody) {
  return axios
    .post<PostType>(
      `${url}/post`,
      { title: body.title, content: body.content },
      {
        headers: {
          Authorization: `Bearer ${body.token}`,
        },
      }
    )
    .then((res) => res.data);
}

type DeletePostBody = {
  id: number;
  token: string;
};

export function deletePost(body: DeletePostBody) {
  return axios
    .delete(`${url}/post/${body.id}`, {
      headers: {
        Authorization: `Bearer ${body.token}`,
      },
    })
    .then((res) => res.data);
}

type LoginBody = {
  email: string;
  password: string;
};
export function login(body: LoginBody) {
  return axios
    .post<LoginInfoType>(`${url}/auth/login`, body)
    .then((res) => res.data);
}

type RegisterBody = {
  email: string;
  password: string;
  name: string;
};

export function register(body: RegisterBody) {
  return axios.post(`${url}/users`, body);
}
