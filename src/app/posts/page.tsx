import { CreateFirstPostButton } from "@/modules/posts/components/CreateFirstPostButton";
import { PostCard } from "@/modules/posts/components/PostCard";
import { getAllPosts } from "@/modules/posts/lib/Post";

export default async function Posts() {
  const posts = await getAllPosts();
  if (posts.length === 0) {
    return (
      <div>
        <p className="mb-2">No post to display</p>
        <CreateFirstPostButton />
      </div>
    );
  }
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
