import { loginWithGoogle, signIn } from "@/services/serviceAuth"
import { compare } from "bcrypt"
import { NextAuthOptions } from "next-auth"
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,

  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string
          password: string
        }
        const user: any = await signIn(email)
        if (user) {
          const passwordConfirm = await compare(password, user.password)

          if (passwordConfirm) {
            return user
          }
          return null
        } else {
          return null
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_OATH_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_OATH_CLIENT_SECRET || "",
    }),
  ],

  // Callbacks for the strategies
  callbacks: {
    async jwt({ token, user, account, profile }: any) {
      if (account?.provider === "credentials") {
        token.email = user.email
        token.fullname = user.fullname
        token.role = user.role
      }

      if (account?.provider === "google") {
        const data = {
          fullname: user.name,
          email: user.email,
          type: "google",
        }

        await loginWithGoogle(data, (data: any) => {
          token.email = data.email
          token.fullname = data.fullname
          token.role = data.role
        })
      }

      return token
    },
    async session({ session, token }: any) {
      if ("email" in token) {
        session.user.email = token.email
      }

      if ("fullname" in token) {
        session.user.fullname = token.fullname
      }

      if ("role" in token) {
        session.user.role = token.role
      }

      return session
    },
  },

  pages: {
    signIn: "/auth/login",
    error: "/auth/login",
  },
}
export default NextAuth(authOptions)
