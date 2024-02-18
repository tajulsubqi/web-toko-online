import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/router"
import { FormEvent, useState } from "react"
import { FcGoogle } from "react-icons/fc"

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
            <Input type="email" name="email" placeholder="Enter your email" />

            <Input type="password" name="password" placeholder="Enter your password" />

            <Button label={isLoading ? "Loading..." : "Login"} type="submit" />

            <hr className="my-3 border-[1px]" />

            <button
              type="button"
              onClick={() => signIn("google", { callbackUrl, redirect: false })}
              className="bg-sky-200 text-black py-2 mt-1 rounded-md font-semibold hover:bg-sky-300 duration-400 shadow-sm transition"
            >
              <div className="flex items-center gap-2 justify-center">
                <FcGoogle size={30} />
                <span>Login With Google</span>
              </div>
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
