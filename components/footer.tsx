export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-4">
      <div className="container mx-auto flex flex-col flex-wrap items-center justify-between">
        <div className="flex gap-x-2 justify-center w-full lg:w-1/4 xl:w-1/5 pl-4 pr-4 md:pl-0 md:pr-0">
          <div className="text-sm font-semibold text-white-400 ">You can find me at</div>
          <a
            href="https://github.com/Lucas-Melo0"
            className="text-sm font-semibold text-gray-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-melo-bb0999210/"
            className="text-sm font-semibold text-gray-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="w-full lg:w-3/4 xl:w-4/5 flex justify-center items-center">
          <span className="text-sm font-semibold text-gray-400">
            &copy; {new Date().getFullYear()} Lucas Melo. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
