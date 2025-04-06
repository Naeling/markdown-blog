import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui";
import { Input } from "@/components/ui";
import { Button } from "@/components/ui";
import { createPostAction } from "@/app/posts/new/createPostAction";

const createPostSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
});

export function PostForm() {
  const form = useForm<z.infer<typeof createPostSchema>>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  return (
    <Form {...form}>
      <form action={createPostAction}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="mb-6">
              <FormLabel> Title </FormLabel>
              <FormControl>
                <Input placeholder="title" {...field} />
              </FormControl>
              <FormDescription>This is your post title</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="mb-6">
              <FormLabel> Content </FormLabel>
              <FormControl>
                <Input placeholder="content" {...field} />
              </FormControl>
              <FormDescription> This is your post content </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit"> Submit </Button>
      </form>
    </Form>
  );
}
