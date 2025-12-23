"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { startTransition, useActionState } from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { ButtonLoading } from "@/components/ButtonLoading";
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
import { createPostSchema, PostMarkdownTabs } from "@/modules/posts";
import { createPostAction } from "@/modules/posts";

export function PostForm() {
  const [state, formAction, isPending] = useActionState(createPostAction, {
    message: "",
    fields: {},
    issues: [],
  });

  const form = useForm<z.infer<typeof createPostSchema>>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      title: "",
      content: "",
      ...state.fields,
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <Form {...form}>
      <form
        ref={formRef}
        action={formAction}
        onSubmit={(evt) => {
          evt.preventDefault();
          form.handleSubmit(() => {
            startTransition(() => {
              formAction(new FormData(formRef.current!));
            });
          })(evt);
        }}
      >
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
                <PostMarkdownTabs
                  markdown={field.value}
                  formFieldName={field.name}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormDescription> This is your post content </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {isPending ? (
          <ButtonLoading text="Submitting..." />
        ) : (
          <Button type="submit"> Submit </Button>
        )}
      </form>
    </Form>
  );
}
