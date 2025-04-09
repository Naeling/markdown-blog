import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  ThemeToggle,
} from "@/components";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 flex justify-between px-4 py-3 border-b bg-background">
      <div className="flex items-center">
        <Link href="/" className="font-semibold text-lg mr-4">
          Markdown Blog
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/posts" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Posts
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/posts/new" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Create post
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <ThemeToggle />
    </header>
  );
}
