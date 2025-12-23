import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export interface ButtonLoadingProps {
  text: string;
}

export function ButtonLoading({ text }: ButtonLoadingProps) {
  return (
    <Button size="sm" variant="outline" disabled>
      <Spinner />
      {text}
    </Button>
  );
}
