/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

// module.exports = {
//   reactStrictMode: true,
//   redirects:async ()=>{
//     return[
//       {
//         source:'/signup',
//         destination:'/',
//         permanent:true
//       }
//     ]
//   }
// }


