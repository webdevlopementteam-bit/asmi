/** @type {import('next').NextConfig} */
const nextConfig = {
  // `next build` writes a fully static site to the `out/` folder.
  output: "export",

  // Every page is exported as `folder/index.html`, so URLs work on any static host
  // (Hostinger, cPanel, Netlify, GitHub Pages…) without server rewrites.
  trailingSlash: true,

  // The Next.js image optimizer needs a server; serve images as-is for static export.
  images: {
    unoptimized: true,
  },

  // If the site is hosted in a sub-folder (e.g. example.com/asmi), set these to "/asmi".
  // basePath: "",
  // assetPrefix: "",
};

export default nextConfig;
