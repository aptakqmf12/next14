/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  // experimental:{
  //   serverActions:{
  //     allowedOrigins: [""]
  //   }
  // }

  // https://velog.io/@deli-ght/nextrewrite%EC%99%80-redirect

  async rewrites() {
    return [
      {
        source: "/old/:slug*",
        destination: "/new/:slug*",
      },
    ];
  },
  // async redirects(){
  //   return [
  //     {
  //       source:"/old:slug",
  //       destination:"/new:slug"
  //     }
  //   ]
  // }
};

export default nextConfig;
