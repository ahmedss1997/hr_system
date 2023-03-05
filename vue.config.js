module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    host: "localhost",
    https: false,
    disableHostCheck: true,
    port: 8080,
    public: "0.0.0.0:8080",
  },
  publicPath: "/ElryaadTask/dist",
  // publicPath: "/",
};
