"use client";

import { X } from "lucide-react";

export interface DeleteButtonIconProps {
  onClick: () => void;
}

export function DeleteButtonIcon({ onClick }: DeleteButtonIconProps) {
  return <X onClick={onClick} className="cursor-pointer" />;
}
