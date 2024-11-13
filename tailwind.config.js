/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px", // Default Tailwind '2xl'
        "3xl": "1920px", // Custom 3xl breakpoint for large monitors
        "4xl": "2560px", // Custom 4xl breakpoint for large desktop screens
        "5xl": "3840px", // Custom 5xl breakpoint for ultra-wide monitors
      },

      fontFamily: {
        poppins: ["Poppins", "Helvetica", "Arial", "sans-serif"], // Define your custom font family
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light"], // Use "light" theme explicitly
  },
};
