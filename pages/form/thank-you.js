import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center text-white bg-gradient-to-r from-teal-500 to-purple-400">
      <h1 className="mb-8 text-3xl font-bold">Thank You for Messaging!</h1>
      <Link
        href="/"
        className="px-4 py-2 bg-black transition-all hover:bg-white hover:text-black rounded-md"
      >
        Back to Home
      </Link>
    </div>
  );
}
