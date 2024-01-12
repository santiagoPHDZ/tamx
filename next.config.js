/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['uploadthing-prod.s3.us-west-2.amazonaws.com', 'utfs.io', 'assets.easybroker.com'],
    },
}

module.exports = nextConfig
