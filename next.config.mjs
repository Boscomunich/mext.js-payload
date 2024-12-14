import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig = {
  /* config options here */
  typescript: { ignoreBuildErrors: true, },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 's3-alpha-sig.figma.com',
        }
      ]
    },
  experimental: {
    reactCompiler: false
  }
};

export default withPayload(nextConfig)
