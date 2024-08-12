import BlogBackButton from "@/components/BlogBackButton";
import { BLOG_POSTS } from "@/lib/dummy_data";
import { notFound } from "next/navigation";
import React from "react";

export default function page(props: any) {
  const blogId = props.params["blog-id"];
  const foundPost = BLOG_POSTS.find((post) => post.slug === blogId);

  if (!foundPost) notFound();
  return (
    <div className="blog-post">
      <div className="blog-header">
        <h1 className="blog-title">{foundPost.title}</h1>
        <p className="blog-category"> ~ {foundPost.category}</p>
      </div>
      <div className="blog-content">
        <p>{foundPost.content}</p>
      </div>
      <div className="blog-footer">
        <BlogBackButton />
      </div>
    </div>
  );
}
