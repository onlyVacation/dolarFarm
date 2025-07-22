/** @type {import('tailwindcss').Config} */
module.exports = {
  // Define os arquivos onde o Tailwind deve procurar por classes
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Aqui você pode estender o tema padrão do Tailwind
      colors: {
        primary: '#FF6F61', // Exemplo de cor primária para AsuraComics
        secondary: '#4A90E2', // Exemplo de cor secundária
        darkBackground: '#1A202C', // Exemplo de cor de fundo escura
        lightText: '#E2E8F0', // Exemplo de cor de texto clara
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Exemplo de fonte
      },
    },
  },
  plugins: [],
  // Configuração para o NativeWind
  important: 'html', // Garante que as classes Tailwind tenham prioridade
};
