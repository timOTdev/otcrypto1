module.exports = {
  env: {
    YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
    YOUTUBE_CHANNEL_ID: process.env.YOUTUBE_CHANNEL_ID,
    IS_TEST_ENVIRONMENT: process.env.IS_TEST_ENVIRONMENT,
  },
  future: {
    webpack5: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};
