import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      //@ts-ignore
      async authorize(credentials: any) {
        if (
          credentials.username === "admin" &&
          credentials.password === "password"
        ) {
          return { name: "Admin" };
        }
        return null;
      },
    }),
  ],
});
