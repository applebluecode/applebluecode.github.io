/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // 如果使用 GitHub Pages 项目页（非用户/组织页），需要加 basePath
  basePath:
    process.env.NODE_ENV === "production" ? "/applebluecode.github.io" : "",
  images: {
    unoptimized: true, // 静态导出必须禁用图片优化
  },
};

module.exports = nextConfig;
