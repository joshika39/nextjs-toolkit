# Next.js toolkit for ablaze

This is a Next.js toolkit for ablaze. It makes creating websites with the same look and feel for Ablaze easy.

## Getting Started

### Steps overview

1. [Add the submodule to your repository](#step-1-add-the-submodule-to-your-repository)
2. [Install the required packages](#step-2-install-the-required-packages)
3. [Add the toolkit path to your `tailwind.config.[js|ts]` file](#step-3-add-the-toolkit-path-to-your-tailwindconfigjsts-file)
4. [Optional] [Add the path to the `tsconfig.json` file](#step-4-optional-add-the-path-to-the-tsconfigjson-file)
5. [Optional] [Copy the `globals.css` file to your project](#step-5-optional-copy-the-globalscss-file-to-your-project)

### Step 1: Add the submodule to your repository

Add the submodule to your repository:

```bash
# Using https
git submodule add https://github.com/Ablaze-MIRAI/nextjs-toolkit.git ./toolkit

# Or using ssh
git submodule add git@github.com:Ablaze-MIRAI/nextjs-toolkit.git ./toolkit
```

#### Notes

If you use https, then it will prompt you to log in with your GitHub account, because the repository is private.
If you use ssh, then you need to have your ssh key added to your GitHub account.

### Step 2: Install the required packages

```bash
# Using npm
npm i sonner ai novel @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-popover @radix-ui/react-scroll-area @radix-ui/react-separator @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toast @radix-ui/react-tooltip @remixicon/react clsx cmdk framer-motion lucide-react next-themes react-aria react-stately react-use-measure tailwind-merge tailwindcss-animate class-variance-authority

# Or using yarn
yarn add sonner ai novel @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-popover @radix-ui/react-scroll-area @radix-ui/react-separator @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toast @radix-ui/react-tooltip @remixicon/react clsx cmdk framer-motion lucide-react next-themes react-aria react-stately react-use-measure tailwind-merge tailwindcss-animate class-variance-authority

# Or using pnpm
pnpm add sonner ai novel @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-popover @radix-ui/react-scroll-area @radix-ui/react-separator @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toast @radix-ui/react-tooltip @remixicon/react clsx cmdk framer-motion lucide-react next-themes react-aria react-stately react-use-measure tailwind-merge tailwindcss-animate class-variance-authority
```

### Step 3: Add the toolkit path to your `tailwind.config.[js|ts]` file

This is important, because, if you forget to do this, then the toolkit will not work.
Your current tailwind styles won't be applied to the toolkit components.

```ts
// tailwind.config.js
const config = {
  // ...
  content: [
    // ...
    './toolkit/**/*.{ts,tsx}',
    // ...
  ]
  // ...
}
```

### Step 4: [Optional] Add the path to the `tsconfig.json` file
You will have an easier time importing the toolkit components if you add the path to the `tsconfig.json` file.

You have two options:
 - The first is easier to set up, but it will be a bit harder to maintain.
(You will add only the root path to the toolkit, and then you 
will have to import the components like this: `import { Button } from '@toolkit/components/ui/button'`.)
 - The second is a bit harder to set up, but it will be easier to maintain.
(You will add the sub paths separately, and then 
you will be able to import the components like this: `import { Button } from '@toolkit/button'`.)

#### Option 1: Add the root path to the `tsconfig.json` file

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@toolkit/*": [
        "./toolkit/*"
      ]
    }
  }
}
```

#### Option 2: Add the sub paths to the `tsconfig.json` file

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/toolkit/*": [
        "./toolkit/components/ui/*",
        "./toolkit/components/layout/*",
        "./toolkit/components/custom/*",
        "./toolkit/components/markdown/*",
        "./toolkit/components/*",
        "./toolkit/lib/*",
        "./toolkit/helpers/*",
        "./toolkit/i18n/*"
      ]
    }
  }
}
```

### Step 5: [Optional] Copy the `globals.css` file to your project

This file contains the global styles for ablaze.

Copy it anywhere in your project and import it in your `layout.tsx` file.

```tsx
// layout.tsx
import '../path/to/globals.css'
```