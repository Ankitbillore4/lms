export function Stats() {
  const stats = [
    { count: "250+", label: "Courses by our best mentors" },
    { count: "1000+", label: "Courses by our best mentors" },
    { count: "15+", label: "Courses by our best mentors" },
    { count: "2400+", label: "Courses by our best mentors" },
  ]

  return (
    <section className="container py-12 md:py-16">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <h3 className="text-3xl text-primary-200 font-bold md:text-4xl">{stat.count}</h3>
            <p className="mt-2 text-sm text-primary-100">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

