"use server";

import { createPostSchema } from "@/modules/posts";
import { createPost } from "@/modules/posts";
import { formDataToObject } from "@/utils";
import mapValues from "lodash/mapValues";
import { redirect } from "next/navigation";

export type FormState = {
  message: string;
  fields: Record<string, string>;
  issues: string[];
};

export async function createPostAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const formDataObject = formDataToObject(formData);
  const createPostData = createPostSchema.safeParse(formDataObject);
  if (!createPostData.success) {
    const fields = mapValues(formDataObject, (value) => value.toString());
    return {
      message: "Invalid form data",
      fields,
      issues: createPostData.error.issues.map((issue) => issue.message),
    };
  }

  await createPost(createPostData.data);
  redirect("/posts");
}
