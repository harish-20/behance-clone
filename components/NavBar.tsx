import Link from "next/dist/client/link";
import { Image } from "next/dist/client/image-component";

import AuthProvider from "./AuthProvider";

import { NavLinks } from "@/constants";

const NavBar = () => {
  const session = null;
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src={"/logo.svg"} width={115} height={43} alt="logo" />
        </Link>

        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((navLink) => {
            return (
              <Link href={navLink.href} key={navLink.key}>
                {navLink.text}
              </Link>
            );
          })}
        </ul>
      </div>

      <div className="flexCenter gap-4">
        {session ? (
          <>
            Userphoto
            <Link href="/create-project">Share Work</Link>
          </>
        ) : (
          <AuthProvider />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
