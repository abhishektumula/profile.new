import { Container } from "@/components/container";
import { NavBar } from "@/components/navbar";
import { RandomQuoteCard } from "@/components/random-quote-card";

export default function BlogsPage() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Container className="min-h-screen">
        <NavBar />
        <section className="flex h-32 w-full items-center justify-center px-4 pt-6 text-center sm:h-40 sm:px-6 sm:pt-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              Blogs
            </h1>
            <p className="pt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              Articles and notes will be published here soon.
            </p>
          </div>
        </section>
        <RandomQuoteCard />
      </Container>
    </div>
  );
}
