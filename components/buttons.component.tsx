"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

export const LoginButton = () => {
  return (
    <button style={{ marginRight: 10 }} onClick={() => signIn()}>
      Sign in
    </button>
  );
};

export const RegisterButton = () => {
  return (
    <Link href="/register" style={{ marginRight: 10 }}>
      Register
    </Link>
  );
};

export const LogoutButton = () => {
  return (
    <button className="flex justify-center items-center text-center w-full mx-auto max-w-xs py-2 px-4 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-300 mt-10 "  onClick={() => signOut()}>
      Sign Out
    </button>
  );
};

export const ProfileButton = () => {
  return <Link href="/profile">Profile</Link>;
};