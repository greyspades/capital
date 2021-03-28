const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const webpack = require("webpack");
const path = require("path");
const withCss=require('@zeit/next-css')

module.exports = withPlugins([[withSass],[withCss], [withImages]], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
  env: {
    mongodburl:"mongodb+srv://grey:Vermilion9%23@cluster0.j4dir.mongodb.net/users?retryWrites=true&w=majority"
  }
});
/*module.exports = {
  env: {
      mongodburl: "mongodb+srv://grey:Vermilion9#@cluster0.j4dir.mongodb.net/user?retryWrites=true&w=majority",
  }
};*/
