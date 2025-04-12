import { NextResponse } from "next/server";

import { Post } from "@/models";

export async function GET() {
  const posts = await Post.find().sort({ createdAt: -1 });
  return NextResponse.json(posts);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { title, content } = body;

  if (!title || !content) {
    return NextResponse.json(
      { error: "Missing title or content" },
      { status: 400 }
    );
  }

  const newPost = await Post.create({ title, content });
  return NextResponse.json(newPost, { status: 201 });
}
