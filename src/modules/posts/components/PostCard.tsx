"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { deletePostAction } from "@/modules/posts/actions/deletePostAction";

import { DeleteButtonIcon } from "./DeleteButtonIcon";

interface PostCardProps {
  id: string;
  title: string;
  content: string;
}

export function PostCard(post: PostCardProps) {
  return (
    <Card className="relative">
      <div className="absolute top-2 right-2">
        <DeleteButtonIcon
          onClick={() => {
            deletePostAction({ id: post.id });
          }}
        />
      </div>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardContent>
          <p> {post.content} </p>
        </CardContent>
      </CardHeader>
    </Card>
  );
}
