import Link from "next/link"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

const RegisterView = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    //yang awalnya e.target
    const form = e.target as HTMLFormElement

    const push = useRouter

    const data = {
      fullname: form.fullname.value,
      email: form.email.value,
      password: form.password.value,
    }

    const result = await fetch("/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    // jika berhasil maka reset form
    if (result.status === 200) {
      form.reset()
      setIsLoading(false)
      push("/auth/login")
    } else {
      setIsLoading(false)
      setError("Email already registered")
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center flex-col md:w-[40%] md:mx-auto">
      <h1 className="text-3xl font-bold md:text-4xl">Register</h1>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <div className="mt-5 shadow-sm p-4 md:border rounded-sm">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 w-[280px] md:w-[500px] md:p-6 ">
            <input
              type="text"
              name="fullname"
              placeholder="Enter your fullname"
              className="bg-slate-100 border border-slate-200 shadow-sm p-2 rounded-md mt-3 outline-none"
            />

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
              {isLoading ? "Loading..." : "Register"}
            </button>
          </div>
        </form>
      </div>

      <p className="mt-2 font-semibold">
        Have an account? Sign in{" "}
        <Link href={"/auth/login"}>
          {" "}
          <span className="text-blue-700 hover:underline duration-400 transition">
            here
          </span>
        </Link>
      </p>
    </div>
  )
}

export { RegisterView }