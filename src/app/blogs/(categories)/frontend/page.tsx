import React from "react";
import { BLOG_POSTS } from "@/lib/dummy_data";
import BlogsList from "@/components/BlogsList";
export default function FrontendCategoryPage() {
  const filteredPosts = BLOG_POSTS.filter(
    (post) => post.category === "Frontend"
  );

  return <BlogsList title="Frontend Blogs" blogs={filteredPosts} />;
}
