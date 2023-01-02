export default function Header () {
        return (
          <header className="bg-gray-900 text-white py-4">
            <div className="container mx-auto flex flex-wrap items-center justify-center">
              <div className="w-full lg:w-1/4 xl:w-1/5 pl-4 pr-4 md:pl-0 md:pr-0">
                <a href="/">
                  <span className="text-xl font-semibold">Lucas Melo</span>
                </a>
              </div>
              <div className="w-full lg:w-3/4 xl:w-1/2 flex justify-end items-center">
                <nav className="flex w-1/2 justify-between -mb-px">
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
