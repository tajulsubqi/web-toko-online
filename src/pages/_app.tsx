import Navbar from "@/components/layout/Navbar"
import "@/styles/globals.css"
import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"
import { Poppins } from "next/font/google"
import { useRouter } from "next/router"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] })

// disable navbar (mengatur navabr tidak ditampilkan)
const disableNavbar = ["auth", "admin"]

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  // pathname
  const { pathname } = useRouter()
  return (
    <SessionProvider session={session}>
      <div className={poppins.className}>
        {!disableNavbar.includes(pathname.split("/")[1]) && <Navbar />}
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  )
}
