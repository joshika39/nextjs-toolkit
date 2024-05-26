# Next.js toolkit for ablaze

This is a Next.js toolkit for ablaze. It makes creating websites with the same look and feel for Ablaze easy.

## Getting Started

Add the submodule to your repository:

```bash
# Using https
git submodule add https://github.com/Ablaze-MIRAI/nextjs-toolkit.git ./components/toolkit

# Or using ssh
git submodule add git@github.com:Ablaze-MIRAI/nextjs-toolkit.git ./components/toolkit
```

You will need to install the following packages as well:
```bash
# Using npm
npm i @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-popover @radix-ui/react-scroll-area @radix-ui/react-separator @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toast @radix-ui/react-tooltip @remixicon/react clsx cmdk framer-motion lucide-react next-themes react-aria react-stately react-use-measure tailwind-merge tailwindcss-animate class-variance-authority

# Or using yarn
yarn add @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-popover @radix-ui/react-scroll-area @radix-ui/react-separator @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toast @radix-ui/react-tooltip @remixicon/react clsx cmdk framer-motion lucide-react next-themes react-aria react-stately react-use-measure tailwind-merge tailwindcss-animate class-variance-authority

# Or using pnpm
pnpm add @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-popover @radix-ui/react-scroll-area @radix-ui/react-separator @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toast @radix-ui/react-tooltip @remixicon/react clsx cmdk framer-motion lucide-react next-themes react-aria react-stately react-use-measure tailwind-merge tailwindcss-animate class-variance-authority
```

I suggest you to also add the path to the tsconfig.json file:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@toolkit/*": ["./components/toolkit/*"]
    }
  }
}
```