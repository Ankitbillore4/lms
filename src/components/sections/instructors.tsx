import { Star } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export function Instructors() {
  const instructors = [
    {
      name: "Ronald Richards",
      role: "UI/UX Designer",
      rating: 4.9,
      students: "2400 Students",
      image: "/images/rectangle 1136.png",
    },
    // Add more instructors
  ]

  return (
    <section className="container py-12">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-primary-200">Top Instructors</h2>
        <Link href="/instructors" className="text-sm text-blue-600 hover:underline">
          See All
        </Link>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-3 lg:grid-cols-5">
        {instructors.map((instructor, index) => (
          <Link key={index} href={`/instructor/${instructor.name.toLowerCase().replace(/ /g, "-")}`}>
            <div className="group rounded-lg border p-4 transition-colors hover:border-primary">
              <div className="aspect-square overflow-hidden rounded-lg">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  width={200}
                  height={200}
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="mt-4 text-center text-primary-100">
                <h3 className="font-semibold text-primary-200">{instructor.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{instructor.role}</p>
                <div className="mt-2 flex items-center justify-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">{instructor.rating}</span>
                  <span className="text-sm text-muted-foreground">{instructor.students}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

