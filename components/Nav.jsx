import Link from "next/link";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Promptopia Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promptopia</p>
      </Link>
    </nav>
  );
}
