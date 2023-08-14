"use client";
import { options } from "@app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { getProviders, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  useEffect(() => {
    const setProvider = async () => {
      const response = getProviders();
      setProviders(response);
    };
    setProvider();
  }, []);
  return (
    <nav className="w-full mb-16 p-3 flex-between">
      <Link className="flex items-center gap-3" href={"/"}>
        <Image
          alt="logo"
          src={"/assets/logo/Interaction-logo.jpg"}
          width={40}
          height={40}
          className="object-contain"
        />
        <p className="logo_text">API Interaction</p>
      </Link>
      {/* Desktop Navigation*/}
      <div className="sm:flex hidden ">
        {isUserLoggedIn ? (
          <>
            <div className="flex gap-3 md:gap-5">
              <Link href={"/create-post"} className="black_btn">
                Create Post
              </Link>
              <button type="button" onClick={signOut} className="outline_btn">
                Sign Out
              </button>
              <Link href={"/profile"}>
                <Image
                  src={"assets/logo/Interaction-logo.svg"}
                  width={37}
                  height={37}
                  className="rounded-full"
                  alt="Profile"
                />
              </Link>
            </div>
          </>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider, index) => {
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>;
              })}
          </>
        )}
      </div>
      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <>
            <div className="flex">
              <Image
                src={"assets/logo/Interaction-logo.svg"}
                width={37}
                height={37}
                className="rounded-full"
                alt="Profile"
                onClick={() => setToggleDropdown((prev) => !prev)}
              />
              {toggleDropdown && (
                <div className="dropdown">
                  <Link
                    href={"/profile"}
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    My profile
                  </Link>
                  <Link
                    href={"/create-post"}
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    Create Post
                  </Link>
                  <button type="button" onClick={() => {setToggleDropdown(false);signOut()}} className="mt-5 w-full black_btn"  >Sign Out</button>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider, index) => {
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>;
              })}
          </>
        )}
      </div>
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
