const glob = require("glob");
const _ = require("lodash");

module.exports = {
  entry: Object.assign(
    {},
    _.reduce(
      glob.sync("./src/*.tsx"),
      (obj, val) => {
        const filenameRegex = /([\w\d_-]*)\.?[^\\\/]*$/i;
        obj[val.match(filenameRegex)[1]] = val;
        return obj;
      },
      {}
    ),
    {
      vendor: ["lodash"]
    }
  ),
  output: {
    filename: "[name].[chunkhash].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [new webpack.HashedModuleIdsPlugin()],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];
            return `npm.${packageName.replace("@", "")}`;
          }
        }
      }
    }
  }
};
