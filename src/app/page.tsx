import { Container } from "@/components/container";
import { Home } from "@/components/Home";

export default function HomeLayout() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-black">
      <Container className="min-h-screen">
        <Home />
      </Container>
    </div>
  );
}
