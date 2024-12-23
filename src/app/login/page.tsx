import Image from "next/image"
import { Header } from "@/components/layout/header"
import { LoginForm } from "@/components/auth/login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <div className="grid w-full max-w-[1200px] grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div className="mx-auto w-full max-w-[450px] space-y-6">
            <LoginForm />
          </div>
          <div className="hidden lg:block">
            <Image
              src="/images/login.png"
              alt="Student reading"
              width={600}
              height={100}
              className="rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

