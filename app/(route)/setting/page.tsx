"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Setting = () => {
  const { data: session } = useSession();
  // @ts-ignore
  if (!session || session.name !== "Admin") {
    return redirect("/");
  }

  return <div>setting page</div>;
};
export default Setting;
