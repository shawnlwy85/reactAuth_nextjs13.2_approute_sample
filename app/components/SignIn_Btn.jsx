"use client";

import React from "react";

import { signIn } from "next-auth/react";

export const SignIn_Btn = () => {
  return (
    <div>
      {/* <h1>SignIn_Btn</h1> */}

      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
};

export default SignIn_Btn;
