import Image from "next/image";
import Link from "next/link";
import React from "react";

// Interface for Blog Post
interface BlogPost {
  slug: string;
  image: string;
  title: string;
  description: string;
}

// Interface for Props
interface BlogsListProps {
  title: string;
  blogs: BlogPost[];
}

export default function BlogsList({ title, blogs }: BlogsListProps) {
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      <div className="blog-cards">
        {blogs.map((post: BlogPost) => (
          <div key={post.slug} className="blog-card">
            <Link href={`/blogs/${post.slug}`}>
              <Image
                src={post.image}
                alt={post.title}
                className="blog-image"
                width={300} // Adjust width as needed
                height={150} // Ensure height matches the container height
                quality={100} // Ensure high quality
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
