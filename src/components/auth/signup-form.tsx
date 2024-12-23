"use client"

import { useState } from "react"
import Link from "next/link"

export function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className="grid gap-6 text-primary-100">
      <div className="grid gap-2">
        <h1 className="text-2xl font-bold tracking-tight text-primary-200">Create Your Account</h1>
        <p className="text-sm text-muted-foreground">
          Enter your information below to create your account
        </p>
      </div>
      <form onSubmit={onSubmit}>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <label htmlFor="firstName" className="font-semibold">First Name</label>
              <input
                id="firstName"
                placeholder="First Name"
                type="text"
                autoCapitalize="none"
                autoCorrect="off"
                disabled={isLoading}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="lastName" className="font-semibold">Last Name</label>
              <input
                id="lastName"
                placeholder="Last Name"
                type="text"
                autoCapitalize="none"
                autoCorrect="off"
                disabled={isLoading}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <label htmlFor="username" className="font-semibold">Username</label>
            <input
              id="username"
              placeholder="Username"
              type="text"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="font-semibold">Email</label>
            <input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="password" className="font-semibold">Password</label>
            <input
              id="password"
              placeholder="Create a password"
              type="password"
              autoComplete="new-password"
              disabled={isLoading}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="confirmPassword" className="font-semibold">Confirm Password</label>
            <input
              id="confirmPassword"
              placeholder="Confirm your password"
              type="password"
              autoComplete="new-password"
              disabled={isLoading}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full p-3 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-300"
          >
            {isLoading ? "Creating..." : "Create Account"}
          </button>
        </div>
      </form>
      <div className="relative mt-4">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or sign up with</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <button
          type="button"
          disabled={isLoading}
          className="flex items-center justify-center p-3 w-full border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="mr-2"
            viewBox="0 0 16 16"
          >
            <path d="M10.25 4.25a2.25 2.25 0 0 0-2.25 2.25v2h-2v-2H5v2H3v3h2v6h2v-6h2v-3h-2v-2a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v2h-2v3h2v-3h-2v-2a2.25 2.25 0 0 0-2.25-2.25h-1.5z"/>
          </svg>
          Facebook
        </button>
        <button
          type="button"
          disabled={isLoading}
          className="flex items-center justify-center p-3 w-full border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="mr-2"
            viewBox="0 0 16 16"
          >
            <path d="M9 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H9zm4 14H9V2h4v12z"/>
          </svg>
          Google
        </button>
        <button
          type="button"
          disabled={isLoading}
          className="flex items-center justify-center p-3 w-full border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="mr-2"
            viewBox="0 0 16 16"
          >
            <path d="M7.5 0A7.5 7.5 0 0 0 0 7.5 7.5 7.5 0 0 0 7.5 15a7.5 7.5 0 0 0 7.5-7.5A7.5 7.5 0 0 0 7.5 0zm0 13A5.5 5.5 0 1 1 13 7.5 5.5 5.5 0 0 1 7.5 13z"/>
          </svg>
          Microsoft
        </button>
      </div>
      <p className="px-8 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/login" className="underline underline-offset-4 hover:text-primary">
          Sign in
        </Link>
      </p>
    </div>
  )
}
