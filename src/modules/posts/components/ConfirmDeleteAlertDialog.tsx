"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export interface ConfirmDeleteAlertDialogProps {
  isOpen: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

export function ConfirmDeleteAlertDialogButtonTrigger({
  isOpen,
  onConfirm,
  onClose,
}: ConfirmDeleteAlertDialogProps) {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>You are about to delete this post</AlertDialogTitle>
          <AlertDialogDescription>
            This post will be permanently deleted. Do you wish to continue ?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
