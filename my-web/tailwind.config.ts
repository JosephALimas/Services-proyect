module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'bg-blue': '#101324', // Añadiendo tu color personalizado aquí
        'headers-blue': "#ffffff",
        'text-blue': "#ffffff",
        'buttons-blue': "#A69CAC",
        'extra-blue' : '#295280',
        'border-blue' : '#2c5a8f',
        'navy' : '#161B33'
      },
      fontFamily: {
        apple: ["-apple-system", "BlinkMacSystemFont", "Helvetica Neue", "Arial", "sans-serif"],
      },
      boxShadow: {
        'soft-glow': '0 0 5px 1px #F1DAC4',
        'blue-glow': '0 0 10px 1px #161B33'
      },
      SearchboxShadow: {
        'relief': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
      },

    },
  },
  plugins: [],
};
