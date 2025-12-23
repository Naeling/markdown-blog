"use server";

import { deletePost } from "@/modules/posts/lib/Post";

export interface DeletePostActionParams {
  id: string;
}

export async function deletePostAction({ id }: DeletePostActionParams) {
  await deletePost({ id });
}
