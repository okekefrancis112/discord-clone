// import type { Config } from 'tailwindcss'
// import { withUt } from "uploadthing/tw";
// import defaultTheme from 'tailwindcss/defaultTheme';

// const config: Config = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic':
//           'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       },
//       colors: {
//         // Preserve all default Tailwind colors
//         ...defaultTheme.colors,

//         // Your custom semantic colors
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",

//         // Your custom palettes
//         zinc: {
//           50: '#fafafa',
//           100: '#f4f4f5',
//           200: '#e4e4e7',
//           300: '#d4d4d8',
//           400: '#a1a1aa',
//           500: '#71717a',
//           600: '#52525b',
//           700: '#3f3f46',
//           800: '#27272a',
//           900: '#18181b',
//           950: '#09090b',
//         },
//         neutral: {
//           50: "#fafafa",
//           100: "#f5f5f5",
//           200: "#e5e5e5",
//           300: "#d4d4d4",
//           400: "#a3a3a3",
//           500: "#737373",
//           600: "#525252",
//           700: "#404040",
//           800: "#262626",
//           900: "#171717",
//           950: "#0a0a0a",
//         },
//       },
//     },
//   },
//   plugins: [],
// }

// export default withUt(config);

import type { Config } from 'tailwindcss'
import { withUt } from "uploadthing/tw";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
}

export default withUt(config);