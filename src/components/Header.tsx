import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className={"header"}>
      <nav className={"nav"}>
        <Link href="/">
          <p className={"navLink"}>Home</p>
        </Link>
        <Link href="/blogs">
          <p className={"navLink"}>Blogs</p>
        </Link>
        <Link href="/about">
          <p className={"navLink"}>About</p>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
