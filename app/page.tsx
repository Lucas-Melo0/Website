import Image from 'next/image';
import './globals.css';
import coding from '../public/coding.svg';
import Link from 'next/link';
import { Inter } from '@next/font/google';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="min-h-screen mt-28 text-white flex w-11/12 justify-center my-0 mx-auto">
      <div className="flex mt-4 flex-col w-8/12">
        <p className="text-xl">Welcome to my personal website! </p>
        <p className="text-2xl mt-4 ">
          Here you can read my thoughts on software engineering and technology, as well as learn about my background and
          experience in the field.
        </p>
        <p className="text-2xl">Thank you for visiting!</p>
        <div className="mt-4">
          <Link href={'/blog'}>
            <button className="text-black bg-orange-400 w-48 h-12  rounded-3xl hover:brightness-90">
              Read the lastest posts
            </button>
          </Link>
        </div>
        <div className="mt-4 flex items-end justify-end">
          <Image width={200} height={200} src={coding} alt={'man sitted coding'} />
        </div>
      </div>
    </main>
  );
}
