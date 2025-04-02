import { z } from "zod";

export const postSchema = z.object({
  id: z.string(),
  title: z.string().min(1),
  content: z.string().min(1),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export const createPostSchema = postSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type PostDTO = z.infer<typeof postSchema>;
export type CreatePostInput = z.infer<typeof createPostSchema>;

console.log("Hello world");
