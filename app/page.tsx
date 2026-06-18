'use client';

import Link from 'next/link';
import { Navigation } from './components/Navigation';
import { TypingEffect } from './components/TypingEffect';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-50">
      <Navigation />

      {/* 主容器 */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 sm:px-8">
        
        {/* Hero 部分 */}
        <section className="py-24 sm:py-32">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl font-light tracking-tight leading-tight">
               <span className="font-medium"><TypingEffect text="Hello, I&apos;m Wu." speed={60} /></span>
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-2xl">
              一名全栈开发工程师，热爱创建优雅高效的数字产品。专注于现代 Web 技术和用户体验设计。
            </p>
            <div className="flex gap-6 pt-4">
              <Link href="/contact" className="px-8 py-3 border border-zinc-900 dark:border-zinc-100 rounded hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-black transition duration-300 text-sm font-light">
                联系我
              </Link>
              <Link href="/projects" className="px-8 py-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition text-sm font-light">
                查看作品 →
              </Link>
            </div>
          </div>
        </section>

        {/* 关于部分预览 */}
        <section className="py-20 sm:py-24 border-t border-zinc-200 dark:border-zinc-800">
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-light tracking-tight">关于我</h2>
              <Link href="/about" className="text-sm font-light text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition">
                查看更多 →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-zinc-600 dark:text-zinc-400 uppercase tracking-wide">技能</h3>
                <div className="space-y-3 text-sm font-light leading-relaxed">
                  <p>TypeScript / JavaScript</p>
                  <p>React / Next.js</p>
                  <p>Node.js / Backend</p>
                  <p>TailwindCSS / UI Design</p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-zinc-600 dark:text-zinc-400 uppercase tracking-wide">经历</h3>
                <p className="text-sm font-light leading-relaxed text-zinc-700 dark:text-zinc-300">
                  专业从事 Web 开发超过 5 年，参与多个大型项目。在前端架构、性能优化和团队协作方面积累了丰富经验。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 项目部分预览 */}
        <section className="py-20 sm:py-24 border-t border-zinc-200 dark:border-zinc-800">
          <div className="space-y-12">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-light tracking-tight">精选项目</h2>
              <Link href="/projects" className="text-sm font-light text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition">
                查看全部 →
              </Link>
            </div>
            
            {/* 项目卡片 */}
            <div className="space-y-8">
              {[1, 2].map((project) => (
                <div key={project} className="group border border-zinc-200 dark:border-zinc-800 rounded p-8 hover:border-zinc-900 dark:hover:border-zinc-100 transition duration-300">
                  <div className="space-y-3">
                    <h3 className="text-xl font-light">项目名称 {project}</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                      这是一个精心设计的项目，展示了现代 Web 开发的最佳实践和创新思路。
                    </p>
                    <div className="flex gap-4 pt-2">
                      <a href="#" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition font-light">
                        访问 →
                      </a>
                      <a href="#" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition font-light">
                        源码
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 联系部分 */}
        <section className="py-20 sm:py-24 border-t border-zinc-200 dark:border-zinc-800">
          <div className="space-y-8">
            <h2 className="text-3xl font-light tracking-tight">获取联系</h2>
            <p className="text-zinc-600 dark:text-zinc-400 font-light max-w-xl">
              有问题或建议？我很乐意听取你的意见。通过以下方式联系我：
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/contact" className="px-8 py-3 border border-zinc-900 dark:border-zinc-100 rounded hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-black transition duration-300 text-sm font-light inline-block w-fit">
                发送邮件
              </Link>
              <div className="flex gap-6 text-sm font-light">
                <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition">
                  GitHub
                </a>
                <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition">
                  Twitter
                </a>
                <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-12">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 py-12 text-center text-sm font-light text-zinc-600 dark:text-zinc-400">
          <p>© 2024 Wu. 精心设计 · 用心编写</p>
        </div>
      </footer>
    </div>
  );
}
