//define where we want it to deliver the ugly browser file to

var config = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: "./build"
  },
  devtool: "source-map"
}

module.exports = config;