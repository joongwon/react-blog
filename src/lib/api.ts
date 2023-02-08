import axios from "axios";
import { PostType } from "../contexts/BlogContext";

const url = "https://api.freleefty.org";
export function getPostList() {
  return axios.get<PostType[]>(`${url}/post`).then((res) => res.data);
}

export function getPost(id: number) {
  return axios.get<PostType>(`${url}/post/${id}`).then((res) => res.data);
}

type CreatePostBody = {
  title: string;
  content: string;
};

export function createPost(body: CreatePostBody) {
  return axios.post<PostType>(`${url}/post`, body).then((res) => res.data);
}

export function deletePost(id: number) {
  return axios.delete(`${url}/post/${id}`).then((res) => res.data);
}
