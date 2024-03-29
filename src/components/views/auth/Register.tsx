import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import authServices from "@/services"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"
import toast from "react-hot-toast"

const RegisterView = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    //yang awalnya e.target
    const form = e.target as HTMLFormElement

    const data = {
      fullname: form.fullname.value,
      email: form.email.value,
      password: form.password.value,
    }

    // post data register
    const response: any | undefined = await authServices.registerAccount(data)

    // jika berhasil maka reset form
    if (response.status === 200) {
      form.reset()
      setIsLoading(false)
      toast.success("Register success")
      router.push("/auth/login")
    } else {
      setIsLoading(false)
      setError("Something went wrong")
      toast.error(response.error)
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center flex-col md:w-[40%] md:mx-auto">
      <h1 className="text-3xl font-bold md:text-4xl">Register</h1>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <div className="mt-5 shadow-sm p-4 md:border rounded-sm">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 w-[280px] md:w-[500px] md:p-6 ">
            <Input type="text" name="fullname" placeholder="Enter your fullname" />

            <Input type="email" name="email" placeholder="Enter your email" />

            <Input type="password" name="password" placeholder="Enter your password" />

            <div className="mt-3">
              <Button label={isLoading ? "Loading..." : "Register"} type="submit" />
            </div>
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
