/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    "bg-green-600",
    "bg-red-600",
    "bg-purple-600",
    "bg-pink-600",
    "bg-yellow-600",
    "bg-orange-600",
    "bg-blue-600",
    "bg-lime-600",
    "bg-gray-600",
    "bg-emerald-600",
    "bg-cyan-600",
    "bg-violet-600",
  ],
};
