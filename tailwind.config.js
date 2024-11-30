module.exports = {
  mode: "jit", 
  content: ["./src/**/*.{js,jsx,ts,tsx}"], 
  theme: {
    extend: {
      colors: {
        primary: "#4A3AFF",
      },
      backgroundImage: {
        // Hero: "url('assets/Hero.png')", 
        Hero: "url('assets/img3.jpg')", 
      },
    },
  },
  plugins: [], // Add Tailwind plugins here if needed
};
