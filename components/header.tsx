'use client';
import Link from 'next/link';
import { useState } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import { handleMode } from '../aux/mode';

export default function Header() {
  const [mode, setMode] = useState<'dark' | 'light'>('dark');
  const isDark = mode === 'dark';
  const isLight = mode === 'light';
  return (
    <header className="bg-gray-900 text-white py-4  border-b-2 border-gray-800 dark:bg-white dark:text-black">
      <div className="pl-4 pr-4 flex flex-row items-center justify-between">
        <div>
          <Link href="/">
            <span className="text-xl font-semibold dark:text-black">Lucas Melo</span>
          </Link>
        </div>
        <nav className="flex justify-center">
          <Link
            className="px-4 py-2 font-bold text-sm hover:text-teal-400 rounded-l-full tracking-wide bg-gray-800 "
            href="/about"
          >
            About
          </Link>
          <Link
            className="px-4 py-2 font-bold text-sm rounded-r-full tracking-wide bg-gray-800 hover:text-teal-400"
            href="/blog"
          >
            Blog
          </Link>
        </nav>
        <div className="flex items-center justify-center border-2 border-gray-800 h-8 w-8  rounded-full">
          <button onClick={handleMode}>
            {isDark && <BsSun onClick={() => setMode('light')} />}
            {isLight && <BsMoon onClick={() => setMode('dark')} />}
          </button>
        </div>
      </div>
    </header>
  );
}
