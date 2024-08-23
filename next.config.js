module.exports = () => {
  return {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://192.168.0.44:3000/:path*',
        },
      ];
    },
  };
};
