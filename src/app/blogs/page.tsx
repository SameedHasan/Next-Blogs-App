import React from "react";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    title: "Understanding React",
    slug: "understanding-react",
    excerpt:
      "A comprehensive guide to understanding the basics and advanced concepts of React.",
    image: "https://via.placeholder.com/150/FF5733/FFFFFF?text=React",
    category: "Frontend",
  },
  {
    title: "Next.js for Beginners",
    slug: "nextjs-for-beginners",
    excerpt: "An introduction to Next.js, the React framework for production.",
    image: "https://via.placeholder.com/150/33FF57/FFFFFF?text=Next.js",
    category: "Frontend",
  },
  {
    title: "CSS Grid Layout",
    slug: "css-grid-layout",
    excerpt:
      "Learn about the CSS Grid Layout module and how it can help you build complex layouts easily.",
    image: "https://via.placeholder.com/150/FF33A1/FFFFFF?text=CSS+Grid",
    category: "Frontend",
  },
  {
    title: "Building REST APIs with Node.js",
    slug: "building-rest-apis-nodejs",
    excerpt: "A guide to creating RESTful APIs using Node.js and Express.",
    image: "https://via.placeholder.com/150/3357FF/FFFFFF?text=Node.js",
    category: "Backend",
  },
  {
    title: "Introduction to Django",
    slug: "introduction-to-django",
    excerpt: "Learn the basics of Django, a high-level Python web framework.",
    image: "https://via.placeholder.com/150/FF5733/FFFFFF?text=Django",
    category: "Backend",
  },
  {
    title: "Understanding GraphQL",
    slug: "understanding-graphql",
    excerpt:
      "An introduction to GraphQL and how it can be used as an alternative to REST.",
    image: "https://via.placeholder.com/150/33FF57/FFFFFF?text=GraphQL",
    category: "Backend",
  },
];

export default function BlogsPage() {
  return (
    <div className="blog-list">
      <h1>Blogs</h1>
      <div className="blog-cards">
        {blogPosts.map((post) => (
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
              <p>{post.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
