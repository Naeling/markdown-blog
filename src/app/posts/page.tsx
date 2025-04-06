import { getAllPosts } from "@/modules/posts/lib/Post";
import { PostCard } from "@/modules/posts/components/PostCard";

export default async function Posts() {
  const posts = await getAllPosts();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard {...post} />
        </li>
      ))}
    </ul>
  );
}
