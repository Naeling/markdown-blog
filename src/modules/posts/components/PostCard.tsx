import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";

interface PostCardProps {
  title: string;
  content: string;
}

export function PostCard(post: PostCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardContent>
          <p> {post.content} </p>
        </CardContent>
      </CardHeader>
    </Card>
  );
}
