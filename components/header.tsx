export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4  border-b-2 border-gray-800 ">
      <div className="flex flex-row items-center justify-center">
        <div className=" pl-4 pr-4">
          <a href="/">
            <span className="text-xl font-semibold">Lucas Melo</span>
          </a>
        </div>
        <div className="w-1/2 flex justify-end items-center">
          <nav className="flex w-1/2 justify-between ">
            <a
              className="px-4 py-2 font-bold text-sm uppercase rounded-lg tracking-wide bg-gray-800 hover:bg-gray-700"
              href="/about"
            >
              About
            </a>
            <a
              className="px-4 py-2 font-bold text-sm uppercase rounded-lg tracking-wide bg-gray-800 hover:bg-gray-700"
              href="/blog"
            >
              Blog
            </a>
            <a
              className="px-4 py-2 font-bold text-sm uppercase rounded-lg tracking-wide bg-gray-800 hover:bg-gray-700"
              href="/books"
            >
              Books
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
