import { Star } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export function Courses() {
  const courses = [
    {
      title: "Beginner's Guide to Design",
      instructor: "Ronald Richards",
      rating: 5,
      reviews: "1200 Ratings",
      duration: "22 Total Hours. 155 Lectures. Beginner",
      price: "$149.9",
      image: "/images/course.png",
    },
    // Add more courses
  ]

  return (
    <section className="container py-12">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-primary-200">Top Courses</h2>
        <Link href="/courses" className="text-sm text-blue-600 hover:underline">
          See All
        </Link>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 text-primary-100 lg:grid-cols-4">
        {courses.map((course, index) => (
          <Link key={index} href={`/course/${course.title.toLowerCase().replace(/ /g, "-")}`}>
            <div className="group rounded-lg border transition-colors hover:border-primary">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={225}
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-primary-200">{course.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">By {course.instructor}</p>
                <div className="mt-2 flex items-center gap-1">
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  <span className="ml-1 text-sm text-muted-foreground">({course.reviews})</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{course.duration}</p>
                <p className="mt-2 text-primary-200 font-bold">{course.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

