import { Button } from "@/components/ui/button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <span> Hello World </span>
        <Button> Shadcn button </Button>
      </main>
    </div>
  );
}
