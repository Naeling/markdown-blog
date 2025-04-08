import { ThemeToggle } from "@/components";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 flex justify-between px-4 py-3 border-b bg-background">
      <Link href="/" className="font-semibold text-lg">
        Markdown Blog
      </Link>
      <ThemeToggle />
    </header>
  );
}
