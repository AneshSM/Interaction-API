import { options } from "@app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function NavBar() {
  const session = await getServerSession(options);
  return (
    <nav className="bg-slate-400 text-slate-50 p-4">
      <ul className="flex justify-evenly text-1xl font-bold">
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
      </ul>
    </nav>
  );
}
