'use client'
import { options } from "@app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-slate-400 text-slate-50 p-4">
      <Link href={'/'}>
        <Image alt="logo" src={'/public/assets/logo/Interaction-logo.svg'} width={30} height={30} className="object-contain" />
      </Link>
      {/* <ul className="flex justify-evenly text-1xl font-bold">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/api/auth/signin">Sign In</Link>
        </li>
        <li>
          <Link href="/api/auth/signout">Sign Out</Link>
        </li>
        {session?.user?.role === "admin" && (
            <li>
              <Link href="/settings">Settings</Link>
            </li>
          ) && (
            <li>
              <Link href="/projects">Projects</Link>
            </li>
          )}
      </ul> */}
    </nav>
  );
}
