"use client";

import { ButtonLoading } from "@/components/ButtonLoading";
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
  isSubmitting: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

export function ConfirmDeleteAlertDialogButtonTrigger({
  isOpen,
  isSubmitting,
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
          {isSubmitting ? (
            <ButtonLoading text="Deleting..." />
          ) : (
            <AlertDialogAction onClick={onConfirm}>Continue</AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
