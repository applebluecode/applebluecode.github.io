'use client';

import { Navigation } from '../components/Navigation';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-50">
      <Navigation />

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 sm:px-8">
        {/* 关于页面标题 */}
        <section className="py-24 sm:py-32">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl font-light tracking-tight leading-tight">
              关于我
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-2xl">
              我是一名热情的全栈开发工程师，致力于创建美观、高效且用户友好的数字产品。
            </p>
          </div>
        </section>

        {/* 个人简介 */}
        <section className="py-20 sm:py-24 border-t border-zinc-200 dark:border-zinc-800">
          <div className="space-y-8">
            <h2 className="text-3xl font-light tracking-tight">我的故事</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-zinc-700 dark:text-zinc-300">
                我从事 Web 开发已有 5 年以上的经验。在这个过程中，我对前端技术的热情不断增长，特别是对 React 和现代 JavaScript 框架的深入理解。
              </p>
              <p className="text-zinc-700 dark:text-zinc-300">
                除了前端开发，我也擅长后端技术，使用 Node.js 和各种数据库技术构建了多个完整的应用系统。我相信全栈能力能帮助我更好地理解整个产品的架构。
              </p>
              <p className="text-zinc-700 dark:text-zinc-300">
                我不仅关注代码质量，更重视用户体验。在每个项目中，我都花时间思考如何让界面更直观、交互更流畅，让用户的每一次操作都感到舒适。
              </p>
            </div>
          </div>
        </section>

        {/* 技能 */}
        <section className="py-20 sm:py-24 border-t border-zinc-200 dark:border-zinc-800">
          <div className="space-y-8">
            <h2 className="text-3xl font-light tracking-tight">技能与专长</h2>
            <div className="grid sm:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-xl font-light">前端技术</h3>
                <ul className="space-y-2 text-zinc-700 dark:text-zinc-300 font-light">
                  <li>• JavaScript / TypeScript</li>
                  <li>• React / Next.js</li>
                  <li>• TailwindCSS / 样式设计</li>
                  <li>• 响应式设计 / 性能优化</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-light">后端与其他</h3>
                <ul className="space-y-2 text-zinc-700 dark:text-zinc-300 font-light">
                  <li>• Node.js / Express</li>
                  <li>• 数据库设计 / SQL</li>
                  <li>• API 设计 / REST</li>
                  <li>• Git / DevOps 基础</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 工作经历 */}
        <section className="py-20 sm:py-24 border-t border-zinc-200 dark:border-zinc-800">
          <div className="space-y-8">
            <h2 className="text-3xl font-light tracking-tight">工作经历</h2>
            <div className="space-y-8">
              <div className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-6">
                <h3 className="text-xl font-light">高级前端工程师</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">2022 - 至今</p>
                <p className="text-zinc-700 dark:text-zinc-300 mt-3 leading-relaxed">
                  负责公司主要产品的前端架构设计和开发，优化了页面加载速度 40%，提升了用户体验。
                </p>
              </div>
              <div className="border-l-2 border-zinc-300 dark:border-zinc-700 pl-6">
                <h3 className="text-xl font-light">全栈开发工程师</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">2020 - 2022</p>
                <p className="text-zinc-700 dark:text-zinc-300 mt-3 leading-relaxed">
                  参与多个项目的全栈开发，从需求分析到部署上线，积累了丰富的端到端开发经验。
                </p>
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
