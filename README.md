# Accessing the new version
- [eveg.vercel.app](https://eveg.vercel.app/) is a build of the main branch hosted by Vercel.
  - Images currently don't load due to the Vite build steps messing with file locations but everything else is functional
# Running the new version
- Navigate to the `my-skeleton-app` directory
- Run `npm install` to install the required packages
- Run `npx vite` to run the webserver locally
- You can also run the old version simultaneously using the live server extension in VSCode
# Svelte/SvelteKit
- The framework the new version is built on is [SvelteKit](https://kit.svelte.dev/).
  - This is a very simple component based library similar to React.
  - Get started by looking at some of the components already present such as ProductCard.svelte (my-skeleton-app/src/lib/components/ProductCard.svelte)
- The UI library is [Skeleton](https://www.skeleton.dev/) which integrates [TailwindCSS](https://tailwindcss.com/) for styling.
- Where possible try to use Skeleton's premade components as it saves time and looks pretty good.
# Working on the website
- Please create a new branch so we can work on different features simultaniously then merge with main when you have finished a feature.
