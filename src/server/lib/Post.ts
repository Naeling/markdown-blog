import compact from "lodash/compact";

import { Post } from "@/server/models";
import { PostDTO, postSchema } from "@/lib/validation/post";

export async function getAllPosts() {
  const rawPosts = await Post.find().sort({ createdAt: -1 });
  const posts: (PostDTO | null)[] = rawPosts.map((post) => {
    const parsedPost = postSchema.safeParse({
      id: post._id.toString(),
      title: post.title,
      content: post.content,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
    });
    if (!parsedPost.success) {
      // eslint-disable-next-line no-console
      console.log(`Found invalid post ${post}`);
      return null;
    }
    return parsedPost.data;
  });

  return compact(posts);
}
