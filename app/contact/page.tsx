'use client';

import { useState } from 'react';
import { Navigation } from '../components/Navigation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // 这里可以添加实际的表单提交逻辑
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    // 3 秒后重置提交状态
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-50">
      <Navigation />

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 sm:px-8">
        {/* 联系页面标题 */}
        <section className="py-24 sm:py-32">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl font-light tracking-tight leading-tight">
              获取联系
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-2xl">
              有问题或建议？我很乐意听取你的意见。通过以下方式联系我。
            </p>
          </div>
        </section>

        {/* 主要内容 */}
        <section className="py-20 sm:py-24 border-t border-zinc-200 dark:border-zinc-800">
          <div className="grid sm:grid-cols-3 gap-12">
            {/* 联系方式 */}
            <div className="sm:col-span-1 space-y-8">
              <div>
                <h3 className="text-sm font-medium text-zinc-600 dark:text-zinc-400 uppercase tracking-wide mb-3">
                  邮箱
                </h3>
                <a
                  href="mailto:contact@example.com"
                  className="text-lg font-light hover:text-zinc-600 dark:hover:text-zinc-400 transition"
                >
                  contact@example.com
                </a>
              </div>

              <div>
                <h3 className="text-sm font-medium text-zinc-600 dark:text-zinc-400 uppercase tracking-wide mb-3">
                  社交媒体
                </h3>
                <div className="space-y-2">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-lg font-light hover:text-zinc-600 dark:hover:text-zinc-400 transition"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-lg font-light hover:text-zinc-600 dark:hover:text-zinc-400 transition"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-lg font-light hover:text-zinc-600 dark:hover:text-zinc-400 transition"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-zinc-600 dark:text-zinc-400 uppercase tracking-wide mb-3">
                  位置
                </h3>
                <p className="text-lg font-light">中国 · 北京</p>
              </div>
            </div>

            {/* 联系表单 */}
            <div className="sm:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-light text-zinc-600 dark:text-zinc-400 mb-2"
                  >
                    姓名 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-zinc-200 dark:border-zinc-800 rounded bg-white dark:bg-black font-light focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-100 transition"
                    placeholder="请输入你的姓名"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-light text-zinc-600 dark:text-zinc-400 mb-2"
                  >
                    邮箱 *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-zinc-200 dark:border-zinc-800 rounded bg-white dark:bg-black font-light focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-100 transition"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-light text-zinc-600 dark:text-zinc-400 mb-2"
                  >
                    主题 *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-zinc-200 dark:border-zinc-800 rounded bg-white dark:bg-black font-light focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-100 transition"
                    placeholder="邮件主题"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-light text-zinc-600 dark:text-zinc-400 mb-2"
                  >
                    消息 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-zinc-200 dark:border-zinc-800 rounded bg-white dark:bg-black font-light focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-100 transition resize-none"
                    placeholder="请输入你的消息..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 border border-zinc-900 dark:border-zinc-100 rounded hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-black transition duration-300 text-sm font-light"
                >
                  {submitted ? '已发送！' : '发送消息'}
                </button>

                {submitted && (
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light">
                    感谢你的消息！我会尽快回复。
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* 常见问题 */}
        <section className="py-20 sm:py-24 border-t border-zinc-200 dark:border-zinc-800">
          <div className="space-y-8">
            <h2 className="text-3xl font-light tracking-tight">常见问题</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-light mb-2">你通常多久回复消息？</h3>
                <p className="text-zinc-600 dark:text-zinc-400 font-light">
                  我通常在 24-48 小时内回复消息。如果是紧急事项，请在邮件主题中注明。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-light mb-2">你接受自由职业项目吗？</h3>
                <p className="text-zinc-600 dark:text-zinc-400 font-light">
                  是的，我接受有趣且有意义的自由职业项目。请详细描述你的项目需求。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-light mb-2">你的工作范围是什么？</h3>
                <p className="text-zinc-600 dark:text-zinc-400 font-light">
                  我专注于前端和全栈开发，特别是使用 React、Next.js 和现代 Web 技术的项目。
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
