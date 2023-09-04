const path = require('path');

module.exports = {
  entry: './src/index.js', // Update with your entry file
  output: {
    filename: 'bundle.js', // Update with your desired output filename
    path: path.resolve(__dirname, 'dist'), // Update with your desired output directory
  },
  resolve: {
    fallback: {
      "buffer": require.resolve("buffer/")
    },
  }
};
