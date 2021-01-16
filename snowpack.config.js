/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
  ],
  alias: {
    components: './src/components',
    containers: './src/containers',
    models: './src/models',
    pages: './src/pages',
    styles: './src/styles',
  },
  // installOptions: {},
  // devOptions: {},
  // buildOptions: {},
};
