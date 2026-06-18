'use client';

import { Navigation } from '../components/Navigation';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: '电商平台',
      description: '一个完整的电商解决方案，包含前台展示、购物车、订单管理和后台管理系统。',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      url: '#',
      github: '#',
    },
    {
      id: 2,
      title: '内容管理系统',
      description: '为中小企业设计的现代 CMS，支持文章发布、评论、标签分类和多用户权限管理。',
      tags: ['Next.js', 'PostgreSQL', 'Tailwind', 'TypeScript'],
      url: '#',
      github: '#',
    },
    {
      id: 3,
      title: '数据可视化仪表板',
      description: '实时数据监控和分析工具，展示关键指标，支持自定义图表和数据导出功能。',
      tags: ['React', 'D3.js', 'Express', 'Redis'],
      url: '#',
      github: '#',
    },
    {
      id: 4,
      title: '社交媒体应用',
      description: '用户可以分享动态、互相关注、评论和点赞的社交平台，支持实时通知。',
      tags: ['React Native', 'Firebase', 'Node.js'],
      url: '#',
      github: '#',
    },
    {
      id: 5,
      title: '任务管理工具',
      description: '功能完整的任务管理应用，支持团队协作、任务分配、进度跟踪和时间统计。',
      tags: ['Next.js', 'Prisma', 'Socket.io', 'React'],
      url: '#',
      github: '#',
    },
    {
      id: 6,
      title: '健身追踪器',
      description: '帮助用户记录运动数据、制定健身计划、跟踪进度的健康应用。',
      tags: ['React', 'Web API', 'Charts.js'],
      url: '#',
      github: '#',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-50">
      <Navigation />

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 sm:px-8">
        {/* 项目页面标题 */}
        <section className="py-24 sm:py-32">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl font-light tracking-tight leading-tight">
              我的项目
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-2xl">
              这里展示了我设计和开发的一些代表作。每个项目都是我对 Web 技术和用户体验的深入理解。
            </p>
          </div>
        </section>

        {/* 项目展示 */}
        <section className="py-20 sm:py-24 border-t border-zinc-200 dark:border-zinc-800">
          <div className="space-y-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group border border-zinc-200 dark:border-zinc-800 rounded p-6 sm:p-8 hover:border-zinc-900 dark:hover:border-zinc-100 transition duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-light mb-2">{project.title}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-2xl">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* 标签 */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1 text-xs font-light bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 链接 */}
                <div className="flex gap-4 pt-2">
                  <a
                    href={project.url}
                    className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition font-light"
                  >
                    访问项目 →
                  </a>
                  <a
                    href={project.github}
                    className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition font-light"
                  >
                    源码
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 其他经历 */}
        <section className="py-20 sm:py-24 border-t border-zinc-200 dark:border-zinc-800">
          <div className="space-y-8">
            <h2 className="text-3xl font-light tracking-tight">开源贡献</h2>
            <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-2xl">
              除了个人项目，我也活跃在开源社区，为多个流行的 JavaScript 库做出过贡献，包括 bug 修复和新功能实现。
            </p>
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
