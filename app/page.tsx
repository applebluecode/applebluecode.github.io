"use client";

import { Navigation } from "./components/Navigation";
import { Fira_Code } from "next/font/google";

const getFiraCode = Fira_Code({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <div
      className={`${getFiraCode.className} flex flex-col min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-50`}
    >
      <Navigation />

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 sm:px-8">
        <section className="py-12">
          <div className="space-y-6">
            <p>
              I am a first-year master&apos;s student at Wuhan University. Prior to this, I
              earned my B.Eng. degree from Anhui Jianzhu University.
            </p>
            <p>
              My research focuses on reinforcement learning and world models,
              with applications in robotics.
            </p>
          </div>
        </section>
        <section className="">
          <div className="flex space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="dark:border-zinc-800 mt-12">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 py-12 text-center text-sm font-light text-zinc-600 dark:text-zinc-400">
          <p>© 2026 Junjie Wu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
