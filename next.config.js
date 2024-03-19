/** 
 * 
 * @type {import('next').NextConfig} 
 * 
 * */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'reqres.in',
            port: '',
            pathname: '/img/faces/**',
          },
        ],
      },  
      
      /*Server actions are not supported with static exports.*/
    experimental: {
      serverActions: true,
    },
    
    output: 'standalone',
    distDir: 'JAJJAaj',
}

module.exports = nextConfig
