import Navbar from "@/components/layout/Navbar"
import "@/styles/globals.css"
import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"
import { Poppins } from "next/font/google"
import { useRouter } from "next/router"
import { Toaster } from "react-hot-toast"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] })

// disable navbar (mengatur navbar tidak ditampilkan)
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
        {/* Alert dari toast */}
        <Toaster
          toastOptions={{
            style: {
              background: "rgb(51, 65, 85)",
              color: "#fff",
            },
          }}
        />
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  )
}
