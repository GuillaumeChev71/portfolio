import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";
import { Download } from "lucide-react";

export const metadata = {
  title: "Blog",
  description:
    "Articles du blog ITGC : développement logiciel, automatisation de processus métiers et outils sur mesure, par le studio itgcdev.fr.",
  alternates: {
    canonical: "/blog",
  },
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">Blog ITGC</h1>
      </BlurFade>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <div className="flex items-center space-x-2 mb-4">
              <Link
                className="flex flex-col space-y-1 mb-4"
                href={`/blog/${post.slug}`}
              >
                <div className="w-full flex flex-col">
                  <p className="tracking-tight">{post.metadata.title}</p>
                  <p className="h-6 text-xs text-muted-foreground">
                    {post.metadata.publishedAt}
                  </p>
                </div>
              </Link>
            </div>
          </BlurFade>
        ))}
    </section>
  );
}
