const path = require("path");

module.exports = {
  mode: "development", // Cambia a "production" para optimizar el código
  entry: "./src/components/menu.ts", // Archivo de entrada
  output: {
    filename: "menu.bundle.js", // Archivo de salida
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Aplicar la regla a archivos .ts
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"], // Permitir importar archivos sin especificar la extensión
  },
};
