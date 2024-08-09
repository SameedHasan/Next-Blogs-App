import { BLOG_POSTS } from "@/lib/dummy_data";
import BlogsList from "@/components/BlogsList";

export default function BlogsPage() {
  return <BlogsList title="Blogs" blogs={BLOG_POSTS} />;
}
