"use client";

import { startTransition, useState } from "react";
import Markdown from "react-markdown";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { deletePostAction } from "@/modules/posts/actions/deletePostAction";

import { ConfirmDeleteAlertDialogButtonTrigger } from "./ConfirmDeleteAlertDialog";
import { DeleteButtonIcon } from "./DeleteButtonIcon";

interface PostCardProps {
  id: string;
  title: string;
  content: string;
}

export function PostCard(post: PostCardProps) {
  const [isConfirmDeleteDialogOpen, setIsConfirmDeleteDialogOpen] =
    useState(false);
  const [isSubmittingDelete, setIsSubmittingDelete] = useState(false);

  return (
    <>
      <Card className="relative">
        <div className="absolute top-2 right-2">
          <DeleteButtonIcon
            onClick={() => setIsConfirmDeleteDialogOpen(true)}
          />
        </div>
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <CardContent>
            <Markdown>{post.content}</Markdown>
          </CardContent>
        </CardHeader>
      </Card>
      <ConfirmDeleteAlertDialogButtonTrigger
        isOpen={isConfirmDeleteDialogOpen}
        isSubmitting={isSubmittingDelete}
        onConfirm={() => {
          setIsSubmittingDelete(true);
          startTransition(async () => {
            await deletePostAction({ id: post.id });
            setIsSubmittingDelete(false);
            setIsConfirmDeleteDialogOpen(false);
          });
        }}
        onClose={() => setIsConfirmDeleteDialogOpen(false)}
      />
    </>
  );
}
