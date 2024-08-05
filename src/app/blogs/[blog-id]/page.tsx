import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
const blogPosts = [
  {
    title: "Understanding React",
    slug: "understanding-react",
    content:
      "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of an application efficiently...",

    category: "Frontend",
  },
  {
    title: "Next.js for Beginners",
    slug: "nextjs-for-beginners",
    content:
      "Next.js is a React framework that enables server-side rendering and static site generation. It helps developers build fast and optimized web applications...",
    category: "Frontend",
  },
  {
    title: "CSS Grid Layout",
    slug: "css-grid-layout",
    content:
      "CSS Grid Layout is a powerful layout system in CSS. It allows developers to create complex grid-based layouts with ease, using a set of grid lines and cells...",
    category: "Frontend",
  },
  {
    title: "Building REST APIs with Node.js",
    slug: "building-rest-apis-nodejs",
    content:
      "Building REST APIs with Node.js involves creating endpoints that handle HTTP requests and responses. Using frameworks like Express.js can simplify this process...",

    category: "Backend",
  },
  {
    title: "Introduction to Django",
    slug: "introduction-to-django",
    content:
      "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. It provides built-in features like an ORM, admin interface, and more...",

    category: "Backend",
  },
  {
    title: "Understanding GraphQL",
    slug: "understanding-graphql",
    content:
      "GraphQL is a query language for APIs and a server-side runtime for executing queries by specifying the shape and structure of the response...",
    category: "Backend",
  },
];
export default function page(props: any) {
  const blogId = props.params["blog-id"];
  const foundPost = blogPosts.find((post) => post.slug === blogId);

  if (!foundPost) notFound();
  return (
    <div className="blog-post">
      <div className="blog-header">
        <h1 className="blog-title">{foundPost.title}</h1>
        <p className="blog-category">{foundPost.category}</p>
      </div>
      <div className="blog-content">
        <p>{foundPost.content}</p>
      </div>
      <div className="blog-footer">
        <Link href="/blogs" className="back-to-blog">
          Back to Blogs
        </Link>
      </div>
    </div>
  );
}
