/** @type {import('next').NextConfig} */
const nextConfig = {
    // webpack: (config) => {
    //     config.externals.push({
    //         "utf-8-validate": "commonjs utf-8-validate",
    //         bufferutil: "commonjs bufferutil"
    //     });

    //     return config;
    // },
    images: {
        domains: [
            "uploadthing.com"
        ]
    }
}

module.exports = nextConfig

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "xdtmn4y8oa.ufs.sh",
//         port: "",
//         pathname: "/**",
//       },
//       {
//         protocol: "https",
//         hostname: "uploadthing.com",
//         port: "",
//         pathname: "/**",
//       },
//     ],
//   },
// };

// module.exports = nextConfig;