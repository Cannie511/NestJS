/* eslint-disable prettier/prettier */
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        console.log("check credentials: ", credentials);
        // const user = {
        //    _id: "123",
        //   username: "123",
        //   email: "123",
        //   isVerify: "123",
        //   type: "123",
        //   role: "123"
        // };
 
        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error("User not found.")
        }
 
        // return user object with their profile data
        return user
      },
    }),
  ],
  pages: {
    signIn: '/auth/login'
  }
});