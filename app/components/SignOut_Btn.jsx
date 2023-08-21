"use client";

import React from "react";

import { signOut } from "next-auth/react";

export const SignOut_Btn = () => {
  return (
    <div>
      {/* <h1>SignOut_Btn</h1> */}

      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default SignOut_Btn;
