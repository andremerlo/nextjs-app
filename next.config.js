module.exports = {
    useFileSystemPublicRoutes: false,
    webpack: (config) => {
      config.node = { fs: "empty" } //@see https://github.com/webpack-contrib/css-loader/issues/447
      return config
    }
}