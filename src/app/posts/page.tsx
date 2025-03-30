import { getAllPosts } from "@/server/lib/Post";
import { PostCard } from "@/components/posts/PostCard";

export default async function Posts() {
  const posts = await getAllPosts();
  return (
    <section>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard {...post} />
          </li>
        ))}
      </ul>
    </section>
  );
}
