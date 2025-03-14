module.exports = {
    plugins: [
      require("postcss-import"), // Une archivos CSS importados en un solo archivo
      require("postcss-url")({
        filter: (asset) => asset.url.startsWith("../../icons/"),
        url: (asset) => {
          return asset.url.replace("../../icons/", "/icons/");
        },
      }),
      require("autoprefixer")(),
      require("cssnano")()
    ]
  };
  