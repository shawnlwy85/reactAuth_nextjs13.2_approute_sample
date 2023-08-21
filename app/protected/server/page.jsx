import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../../api/auth/[...nextauth]/route";

import React from "react";

export const serverProtectedPage = async () => {
  const session = await getServerSession(authOptions);
  console.log("server session", session);

  if (!session) {
    redirect("/signin?callbackUrl=/protected/server");
  }
  return (
    <div>
      <h1>Server Page</h1>
      <b>Data from Server</b>
      <div>{`user name : ${session?.user?.name}`}</div>
      <div>{`user email : ${session?.user?.email}`}</div>
      <div>{`user image : ${session?.user?.image}`}</div>
    </div>
  );
};

export default serverProtectedPage;
