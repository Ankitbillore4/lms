import { Telescope, Code, Briefcase, Atom } from 'lucide-react'
import Link from "next/link"

export function Categories() {
  const categories = [
    { name: "Astrology", icon: Telescope, courses: "11 Courses" },
    { name: "Development", icon: Code, courses: "12 Courses" },
    { name: "Marketing", icon: Briefcase, courses: "12 Courses" },
    { name: "Physics", icon: Atom, courses: "14 Courses" },
  ]

  return (
    <section className="container py-12">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-primary-200">Top Categories</h2>
        <Link href="/categories" className="text-sm text-blue-600 hover:underline">
          See All
        </Link>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6  sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <Link
          key={category.name}
          href={`/category/${category.name.toLowerCase()}`}
          className="group relative rounded-lg border p-6 hover:border-primary"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <category.icon className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-primary-200">{category.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground text-primary-100">{category.courses}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

