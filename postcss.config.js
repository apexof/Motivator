module.exports = ({ file, options, env }) => ({
  parser: false,
  plugins: {
    autoprefixer: {},
    cssnano: env === "production" ? {} : false
  }
});
