import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import withPWA from 'next-pwa';

const pwaConfig = withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
});

const nextConfig = {};

export default pwaConfig(nextConfig);
