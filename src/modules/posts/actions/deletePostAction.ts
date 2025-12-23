"use server";

import { revalidatePath } from "next/cache";

import { deletePost } from "@/modules/posts/lib/Post";

export interface DeletePostActionParams {
  id: string;
}

export async function deletePostAction({ id }: DeletePostActionParams) {
  await deletePost({ id });
  revalidatePath("/posts");
}
