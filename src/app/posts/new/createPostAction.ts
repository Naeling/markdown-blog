"use server";

import { createPostSchema } from "@/modules/posts";
import { createPost } from "@/modules/posts";
import { formDataToObject } from "@/utils";

import { redirect } from "next/navigation";

export async function createPostAction(formData: FormData) {
  const createPostData = createPostSchema.parse(formDataToObject(formData));
  await createPost(createPostData);
  redirect("/posts");
}
