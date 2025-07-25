// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         domains: [
//             "uploadthing.com"
//         ]
//     }
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xdtmn4y8oa.ufs.sh",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "uploadthing.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;