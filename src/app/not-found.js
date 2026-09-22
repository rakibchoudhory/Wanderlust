
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-blue-600 to-cyan-500 px-6 overflow-hidden">
      
      {/* Background circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-pink-400 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>

      <div className="relative text-center text-white">

        {/* 404 */}
        <h1 className="text-[120px] md:text-[180px] font-extrabold leading-none tracking-widest animate-bounce">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-white/80 text-lg max-w-md mx-auto mb-8">
          The page you are looking for does not exist or may have been moved.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="inline-block px-8 py-3 rounded-full bg-white text-blue-600 font-bold shadow-lg hover:scale-110 hover:bg-yellow-300 hover:text-purple-700 transition-all duration-300"
        >
          Back to Home
        </Link>

      </div>
    </div>
  );
}

