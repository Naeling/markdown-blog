"use server";

import compact from "lodash/compact";

import { Post } from "@/models";
import { PostDTO, postSchema } from "@/modules/posts";

export async function getAllPosts() {
  const rawPosts = await Post.find().sort({ createdAt: 1 });
  const posts: (PostDTO | null)[] = rawPosts.map((post) => {
    const parsedPost = postSchema.safeParse({
      id: post._id.toString(),
      title: post.title,
      content: post.content,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
    });
    if (!parsedPost.success) {
      console.log(`Found invalid post ${post}`);
      return null;
    }
    return parsedPost.data;
  });

  return compact(posts);
}

export async function createPost({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  const post = new Post({ title, content });
  return post.save();
}
