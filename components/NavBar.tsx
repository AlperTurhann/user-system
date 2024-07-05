import React from "react";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <nav className="h-14 flex items-center text-xl pl-5 bg-emerald-600 text-white">
      <Link href="/">Social</Link>
      <div className="w-full flex justify-end pr-5">
        <Link href="/profile">
          <Button variant="ghost" size="icon">
            <FaUser className="size-5" />
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
