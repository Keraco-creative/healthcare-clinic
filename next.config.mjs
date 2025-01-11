import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {};


export default withSentryConfig(nextConfig, {
  org: "keraco-creative-agency",
  project: "brighton-healthcare",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  hideSourceMaps: true,
  productionBrowserSourceMaps: false,
  disableLogger: true,
  automaticVercelMonitors: true,
  reactComponentAnnotation: {
    enabled: true,
  },
});
