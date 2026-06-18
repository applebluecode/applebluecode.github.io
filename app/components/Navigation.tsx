import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-xl font-light tracking-tight hover:opacity-80 transition text-blue-500 dark:hover:text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0000F5"><path d="M281.5-201.5Q200-283 200-400q0-94 55.5-168.5T401-669q-33-8-57.5-28.5T304-747q-15-29-21-63t-2-69q41-5 78 5t67 32q30 22 49.5 53t23.5 70q13-31 34.5-61.5T600-856l56 56q-43 43-63.5 73T564-667q88 28 142 101.5T760-400q0 117-81.5 198.5T480-120q-117 0-198.5-81.5Zm340-57Q680-317 680-400t-58.5-141.5Q563-600 480-600t-141.5 58.5Q280-483 280-400t58.5 141.5Q397-200 480-200t141.5-58.5ZM480-400Z"/></svg>
        </Link>
        <ul className="flex gap-8 text-sm font-poppins font-light">
          <li><Link href="/about" className="hover:text-zinc-600 dark:hover:text-zinc-400 transition">关于</Link></li>
          <li><Link href="/projects" className="hover:text-zinc-600 dark:hover:text-zinc-400 transition">项目</Link></li>
          <li><Link href="/contact" className="hover:text-zinc-600 dark:hover:text-zinc-400 transition">联系</Link></li>
        </ul>
      </div>
    </nav>
  );
}
