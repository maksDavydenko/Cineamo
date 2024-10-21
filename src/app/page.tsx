import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl font-bold mb-6">Welcome to the Cineamo App</h1>
      <p className="text-lg mb-4">Choose an option below:</p>
      <div className="space-y-4">
        <Link
          href="/cinemas"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-700"
        >
          View Cinemas
        </Link>
        <Link
          href="/movies"
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-700 mx-10"
        >
          View Movies
        </Link>
        <Link
          href="/"
          className="px-6 py-3 bg-gray-500 text-white rounded-lg shadow-lg hover:bg-gray-700"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
