import Link from "next/link"
import { Facebook, Github, Mail, MapPin, Phone, Twitter, ComputerIcon as Windows } from 'lucide-react'
import Image from "next/image"
export function Footer() {
  return (
    <footer className="border-t bg-slate-950 text-slate-50">
      <div className="container grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Image src="/images/namelogo.png" alt="Logo" width={150} height={50} />
          </Link>
          <p className="mt-4 text-slate-400">
            Empowering learners through accessible and engaging online education.
          </p>
          <p className="mt-4 text-slate-400">
            Byway is a leading online learning platform dedicated to providing high-quality, flexible, and affordable
            educational experiences.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Get Help</h3>
          <ul className="space-y-2 text-slate-400">
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/articles">Latest Articles</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Programs</h3>
          <ul className="space-y-2 text-slate-400">
            <li>
              <Link href="/programs/art-design">Art & Design</Link>
            </li>
            <li>
              <Link href="/programs/business">Business</Link>
            </li>
            <li>
              <Link href="/programs/it-software">IT & Software</Link>
            </li>
            <li>
              <Link href="/programs/languages">Languages</Link>
            </li>
            <li>
              <Link href="/programs/programming">Programming</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
          <ul className="space-y-4 text-slate-400">
            <li className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Address: 123 Main Street, Anytown, CA 12345
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Tel: +(123) 456-7890
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Mail: client@skillsmedia.in
            </li>
          </ul>
          <div className="mt-6 flex gap-4">
            <Link href="#" className="rounded-full bg-white p-2 hover:bg-slate-700">
              <Image src='/images/facebook.png' alt="facebook" width={20} height={20}></Image>
            </Link>
            <Link href="#" className="rounded-full bg-white p-2 hover:bg-slate-700">
              <Image src='/images/github.png' alt="github" width={20} height={20}></Image>
            </Link>
            <Link href="#" className="rounded-full bg-white p-2 hover:bg-slate-700">
              <Image src='/images/google.png' alt="google" width={20} height={20}></Image>
            </Link>
            <Link href="#" className="rounded-full bg-white p-2 hover:bg-slate-700">
              <Image src='/images/twitter.png' alt="twitter" width={20} height={20}></Image>
            </Link>
            <Link href="#" className="rounded-full bg-white p-2 hover:bg-slate-700">
              <Image src='/images/microsoft.png' alt="microsoft" width={20} height={20}></Image>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

