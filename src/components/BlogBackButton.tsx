"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function BlogBackButton() {
  const router = useRouter();
  return (
    <span className="back-to-blog" onClick={() => router.back()}>
      Back to Blogs
    </span>
  );
}
