import { useParams } from "react-router-dom";
import { PostView } from "../components/PostView";
import { useBlogContext } from "../contexts/BlogContext";
import { NotFoundPage } from "./NotFoundPage";

export function PostPage() {
  const { id } = useParams();
  const { getPost } = useBlogContext();
  const post = getPost(Number(id));
  if (!post) {
    return <NotFoundPage />;
  } else {
    return <PostView post={post} />;
  }
}
