This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Once the server is running, open http://localhost:3000 in your browser to view the application.

You can start editing the application by modifying the file located at page.jsx. The page will automatically update as you make changes.

## Adding Images

 ## Adding Local Images
Place your image files in the public/ directory of your project. For example, you can add an image at public/4.jpg.

Import the image in your component using the next/image component:
import Image from "next/image";
import img1 from "../../public/4.jpg";

export default function Home() {
  return (
    <Image
      src={img1}
      alt="Local Image"
      width={1000}
      height={1000}
    />
  );
}

## Adding Remote Images

To use remote images, you need to configure the next.config.mjs file to allow specific domains. Add the following configuration:

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"], // Add your allowed domains here
  },
};

export default nextConfig;

Then, use the next/image component to render the remote image:

import Image from "next/image";

export default function Home() {
  return (
    <Image
 src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=2074&auto=format&fit=crop"
      alt="Remote Image"
      width={1000}
      height={1000}
    />
  );
}

Notes on Image Optimization

Local Images: Automatically optimized by Next.js when placed in the public/ directory.
Remote Images: Ensure the domain is added to the domains array in next.config.mjs for optimization.

## Project Structure

The project structure is as follows:
myfirstnextapp/
├── .gitignore
├── .next/
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── public/
│   └── 4.jpg
├── README.md
├── src/
│   └── app/
│       └── page.jsx
