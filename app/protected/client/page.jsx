"use client";

import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";

export const page = () => {
  // const session = useSession();

  const { data: session, status } = useSession({
    required: true, // if true., mean user need to login to see the page
    onUnauthenticated() {
      redirect("/signin?callbackUrl=/protected/client"); // if user failed to login, rediect to ..., if not set will be default /.
    },
  });

  console.log("client session", session);
  return (
    <div>
      <h1>Client Page</h1>
      <b>Data from Client</b>

      <div>{session?.user?.name}</div>
      <div>{session?.user?.email}</div>
      <div>{session?.user?.name}</div>
      <br />
      <br />
      <br />
      {/* <button onClick={() => signOut()}>Logout</button> */}
    </div>
  );
};

export default page;
