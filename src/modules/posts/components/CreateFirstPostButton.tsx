"use client";

import Link from "next/link";

import { Button } from "@/components";

export function CreateFirstPostButton() {
  return (
    <Link href={"/posts/new"}>
      <Button>Create your first post</Button>
    </Link>
  );
}
