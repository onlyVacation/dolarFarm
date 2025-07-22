module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ["nativewind/babel"] // Adiciona o plugin do NativeWind para o Tailwind CSS
  };
};
