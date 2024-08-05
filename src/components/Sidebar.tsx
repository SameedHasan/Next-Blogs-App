import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Navigation</h2>
      <ul className="sidebar-nav-list">
        <li className="sidebar-nav-item">
          <Link href="/">
            <p className="sidebar-nav-link">Home</p>
          </Link>
        </li>
        <li className="sidebar-nav-item">
          <Link href="/blogs">
            <p className="sidebar-nav-link">Blogs</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
