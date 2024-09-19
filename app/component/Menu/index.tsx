"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
interface Session {
  name: string;
}
const Menu = () => {
  const { data: session } = useSession();
  return (
    <div className="flex w-full justify-center border-b-[1px] border-b-gray-400">
      <nav>
        <ul className="flex w-full justify-center gap-6 h-14 items-center">
          <li>
            <Link href={"/list"}>
              <span>List</span>
            </Link>
          </li>

          {
            // @ts-ignore
            session && session.name === "Admin" && (
              <li>
                <Link href={"/setting"}>
                  <span>Setting</span>
                </Link>
              </li>
            )
          }
        </ul>
      </nav>
    </div>
  );
};
export default Menu;
