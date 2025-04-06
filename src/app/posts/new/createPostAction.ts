"use server";

import { createPostSchema } from "@/modules/posts";
import { createPost } from "@/modules/posts";
import { formDataToObject } from "@/utils";

export async function createPostAction(formData: FormData) {
  const createPostData = createPostSchema.parse(formDataToObject(formData));
  await createPost(createPostData);
}
