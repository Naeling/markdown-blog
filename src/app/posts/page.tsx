import { PostCard } from "@/modules/posts/components/PostCard";
import { getAllPosts } from "@/modules/posts/lib/Post";

export default async function Posts() {
  const posts = await getAllPosts();
  return (
    <ul>
      {posts.map((post) => (
        <li className="mb-8" key={post.id}>
          <PostCard {...post} />
        </li>
      ))}
    </ul>
  );
}
