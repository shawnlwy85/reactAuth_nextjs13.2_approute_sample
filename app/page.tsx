"use client";
import Image from "next/image";

import { signOut, signIn, useSession } from "next-auth/react";

import React, { useEffect } from "react";
export default function Home() {
  const session = useSession();

  useEffect(() => {
    console.log("Client session", session);
  }, [session]);

  return (
    <>
      <h1>Home page</h1>

      <div>{`Status : ${session?.status}`}</div>
      <div>{`user name : ${session?.data?.user?.name}`}</div>
      <div>{`user email : ${session?.data?.user?.email}`}</div>
      <div>{`user image : ${session?.data?.user?.image}`}</div>
      {session?.status === "authenticated" ? (
        <button onClick={() => signOut()}>Logout</button>
      ) : (
        <button onClick={() => signIn()}>Signin</button>
      )}
    </>
  );
}
