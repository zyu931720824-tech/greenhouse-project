/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // ⚠️ 关键！这里设置 class 模式
  theme: {
    extend: {},
  },
  plugins: [],
}
