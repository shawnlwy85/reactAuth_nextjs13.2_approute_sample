"use client";

import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

import React from "react";

export const GoogleSignIn_Btn = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  console.log("callbackUrl: ", callbackUrl);
  return (
    <div>
      <h1>GoogleSignIn_Btn</h1>

      <br />
      <br />
      <br />
      <button onClick={() => signIn("google", { callbackUrl })}>
        Sign in with Google
      </button>
    </div>
  );
};

export default GoogleSignIn_Btn;
