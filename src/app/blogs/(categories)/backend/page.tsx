import { BLOG_POSTS } from "@/lib/dummy_data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BackendCategoryPage() {
  const filteredPosts = BLOG_POSTS.filter(
    (post) => post.category === "Backend"
  );
  return (
    <div className="blog-list">
      <h1>Backend Blogs</h1>
      <div className="blog-cards">
        {filteredPosts.map((post: any) => (
          <div key={post.slug} className="blog-card">
            <Link href={`/blogs/${post.slug}`}>
              <Image
                src={post.image}
                alt={post.title}
                className="blog-image"
                width="100"
                height="100"
              />
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
