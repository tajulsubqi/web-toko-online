import { signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/router"
// import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

const LoginView = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const { push, query } = useRouter()

  const callbackUrl: any = query.callbackUrl || "/"

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    //yang awalnya e.target
    const form = e.target as HTMLFormElement
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: form.email.value,
        password: form.password.value,
        callbackUrl: callbackUrl,
      })

      if (!res?.error) {
        setIsLoading(false)
        form.reset()
        push(callbackUrl)
      } else {
        setIsLoading(false)
        setError(res?.error)
      }
    } catch (error) {
      setIsLoading(false)
      setError("Email or password is incorrect")
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center flex-col md:w-[40%] md:mx-auto">
      <h1 className="text-3xl font-bold md:text-4xl">Login</h1>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <div className="mt-5 shadow-sm p-4 md:border rounded-sm">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 w-[280px] md:w-[500px] md:p-6 ">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="bg-slate-100 border border-slate-200 shadow-sm p-2 rounded-md mt-3 outline-none"
            />

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="bg-slate-100 border border-slate-200 shadow-sm p-2 rounded-md mt-3 outline-none"
            />

            <button
              type="submit"
              className="mt-5 bg-black text-white font-semibold px-4 py-2 rounded-md hover:bg-slate-700 duration-300 transition"
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          </div>
        </form>
      </div>

      <p className="mt-2 font-semibold">
        Don&apos;t have an account? Sign up
        <Link href={"/auth/register"}>
          {" "}
          <span className="text-blue-700 hover:underline duration-400 transition">
            here
          </span>
        </Link>
      </p>
    </div>
  )
}

export default LoginView
