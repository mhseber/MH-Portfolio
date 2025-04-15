// /** @type {import('tailwindcss').Config} */
// import daisyui from "daisyui"
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [daisyui],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // adjust this as per your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // <-- add this line
}




