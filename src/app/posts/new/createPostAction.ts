"use server";

import { createPostSchema } from "@/modules/posts/validation/post";
import { createPost } from "@/modules/posts/lib/Post";
import formDataToObject from "@/utils/formDataToObject";

export async function createPostAction(formData: FormData) {
  const createPostData = createPostSchema.parse(formDataToObject(formData));
  await createPost(createPostData);
}
