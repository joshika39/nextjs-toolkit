# Next.js toolkit for ablaze

This is a Next.js toolkit for ablaze. It makes creating websites with the same look and feel for Ablaze easy.

## Getting Started

Add the submodule to your repository:

```bash

git submodule add https://github.com/Ablaze-MIRAI/nextjs-toolkit.git ./components/toolkit

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