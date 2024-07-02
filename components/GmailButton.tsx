// const GmailButton = () => {
//   return (
//     <a href="mailto:guptaojas75@gmail.com">
//       <svg
//         className={"h-5 w-5 sm:h-6 sm:w-6"}
//         viewBox="0 0 24 24"
//         fill="currentColor"
//       >
//         <path
//           d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
//         />
//       </svg>
//     </a>
//   );
// };

const GmailButton = () => {
  return (
    <a 
      href="mailto:guptaojas75@gmail.com"
      className="group relative inline-block h-5 w-5 sm:h-6 sm:w-6"
    >
      <svg
        className="h-full w-full transition-opacity duration-300 ease-in-out group-hover:opacity-0"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
        />
      </svg>
      <svg
        className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
        viewBox="0 0 24 24"
      >
        <defs>
          <linearGradient id="gmail-hover-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EA4335" />
            <stop offset="50%" stopColor="#FBBC05" />
            <stop offset="100%" stopColor="#34A853" />
          </linearGradient>
        </defs>
        <path
          fill="url(#gmail-hover-gradient)"
          d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
        />
      </svg>
    </a>
  );
};






export default GmailButton;