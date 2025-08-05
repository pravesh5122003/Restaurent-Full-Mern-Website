module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#FF3C38",     // 🔴 Red for buttons, highlights
          accent: "#FFD300",      // 🟡 Yellow for background or accents
          dark: "#1f1f1f",        // Optional: Dark text
        },
        boxShadow: {
          soft: "0 4px 20px rgba(0,0,0,0.1)",
        },
      },
    },
    plugins: [],
  };
  