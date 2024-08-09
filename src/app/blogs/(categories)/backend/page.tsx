import BlogsList from "@/components/BlogsList";
import { BLOG_POSTS } from "@/lib/dummy_data";
import React from "react";

export default function BackendCategoryPage() {
  const filteredPosts = BLOG_POSTS.filter(
    (post) => post.category === "Backend"
  );
  return <BlogsList title="Backend Blogs" blogs={filteredPosts} />;
}
