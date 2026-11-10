import type { NextConfig } from "next";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const isUserPage = repository?.endsWith(".github.io");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  // Za GitHub projektni repozitorij dodajemo naziv repozitorija
  // kao prefiks putanje. Za lokalni razvoj prefiks ne postoji.
  ...(isGitHubActions && repository && !isUserPage
    ? { basePath: `/${repository}` }
    : {}),

  images: {
    unoptimized: true,
  },
};

export default nextConfig;