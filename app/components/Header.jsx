"use client";

import Link from "next/link";
import SignIn_Btn from "./SignIn_Btn";
import SignOut_Btn from "./SignOut_Btn";

const Header = () => {
  return (
    <>
      <h1>Header</h1>
      <br />
      <Link href="/">Home</Link>
      <br />
      <Link href="/protected/server">Protected (server)</Link>
      <br />
      <Link href="/protected/client">Protected (client)</Link>
      <br />
      <SignIn_Btn />
      <SignOut_Btn />
    </>
  );
};

export default Header;
