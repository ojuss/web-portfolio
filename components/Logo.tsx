import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="group">
  <span className="relative inline-block font-daddybee text-7xl">
    {/* Gradient text (hidden by default) */}
    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
      <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">o</span>
      <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">j</span>
      <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">u</span>
      <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">s</span>
      <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">.</span>
    </span>
    
    {/* Normal colored text (visible by default) */}
    <span className="relative z-10 group-hover:text-transparent transition-colors duration-300 ease-in-out">
      <span className="text-green-400 dark:text-white">o</span>
      <span className="text-green-400 dark:text-white">j</span>
      <span className="text-green-400 dark:text-white">u</span>
      <span className="text-green-400 dark:text-white">s</span>
      <span className="text-green-400 dark:text-white">.</span>
    </span>
  </span>
</Link>
  );
};

export default Logo;