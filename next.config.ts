import type { NextConfig } from 'next';
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
    experimental: {
        globalNotFound: true
    },
    pageExtensions: ['mjs', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
    extension: /\.(md|mdx)$/,
})

export default withMDX(nextConfig);
