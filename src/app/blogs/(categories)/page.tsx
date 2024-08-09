import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/lib/dummy_data";

export default function BlogsPage() {
  return (
    <div className="blog-list">
      <h1>Blogs</h1>
      <div className="blog-cards">
        {BLOG_POSTS.map((post) => (
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
