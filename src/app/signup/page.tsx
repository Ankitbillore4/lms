import Image from "next/image"
import { Header } from "@/components/layout/header"
import { SignUpForm } from "@/components/auth/signup-form"

export default function SignUpPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <div className="grid w-full max-w-[1200px] grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <Image
            src="/images/signup.png"
            alt="Student studying"
            width={600}
            height={400}
            className="hidden rounded-lg object-cover lg:block"
            priority
          />
          <div className="mx-auto w-full max-w-[450px] space-y-6">
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  )
}

