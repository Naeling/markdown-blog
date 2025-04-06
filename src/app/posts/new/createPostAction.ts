"use server";

import { createPostSchema } from "@/lib/validation/post";
import { createPost } from "@/server/lib/Post";
import formDataToObject from "@/lib/utils/formDataToObject";

export async function createPostAction(formData: FormData) {
  const createPostData = createPostSchema.parse(formDataToObject(formData));
  await createPost(createPostData);
}
