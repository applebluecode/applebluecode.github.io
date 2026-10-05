import { Bitcount_Grid_Double } from 'next/font/google';
import Link from 'next/link';


const getBitcountGridDouble = Bitcount_Grid_Double({
  subsets: ["latin"],
  weight: '300'
});


export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-4 flex justify-between items-center">
        <Link
          href="/"
          className={`${getBitcountGridDouble.className} flex items-center gap-2 text-2xl font-light tracking-tight hover:opacity-80 transition text-[#034f9f]`}
        >
          Junjie Wu
        </Link>
        <ul className="flex gap-8 text-sm font-poppins font-light">
          <li>
            <Link
              href=""
              className="hover:text-zinc-600 dark:hover:text-zinc-400 transition"
            >
              CV
            </Link>
          </li>
          <li>
            <Link
              href="mailto:junjwu@whu.edu.cn"
              className="hover:text-zinc-600 dark:hover:text-zinc-400 transition"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
