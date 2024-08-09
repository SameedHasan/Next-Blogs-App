import Sidebar from "@/components/Sidebar";
import React from "react";

export default function BlogsListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  );
}
