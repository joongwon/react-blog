import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { PostView } from "../components/PostView";
import { getPost } from "../lib/api";
import { NotFoundPage } from "./NotFoundPage";

export function PostPage() {
  const { id } = useParams();
  const query = useQuery(["post", id], () => getPost(Number(id)));
  const post = query.data;
  if (query.isError) {
    return <NotFoundPage />;
  } else if (!post) {
    return <div>로딩중...</div>;
  } else {
    return <PostView post={post} />;
  }
}
