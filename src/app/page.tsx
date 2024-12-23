import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="bg-white">
    <header className="flex items-center justify-between px-6 py-4 shadow-md">
      {/* Logo and Brand Name */}
      <div className="flex items-center space-x-6">
        <Image
          src="/logo.png" // Replace with the path to your logo
          alt="Logo"
          width={40}
          height={40}
        />
        <span className="text-xl font-semibold text-primary-100">Client</span>
        <a href="#" className="text-primary-100">
          Categories
        </a>
        <div className="relative">
          <input
            type="text"
            placeholder="Search courses"
            className="pl-10 pr-4 py-2 border rounded-md focus:outline-none  border-primary-100 w-full sm:w-72 md:w-96 lg:w-[500px]"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-100"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.851-3.85Zm-5.242 1.42a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z" />
          </svg>
        </div>
        <a href="#" className="text-primary-100">
          Teach on Client
        </a>
      </div>

      {/* Search and Action Buttons */}
      <div className="flex items-center space-x-4">

        <button className="px-4 py-2 border rounded-md text-primary-100 hover:bg-gray-100">
          Log In
        </button>
        <button className="px-4 py-2 bg-primary-100 text-white rounded-md hover:bg-blue-700">
          Sign Up
        </button>
      </div>
    </header>
    </div>
    </>
    
  );
}
