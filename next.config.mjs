import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {};


export default withSentryConfig(nextConfig, {
  org: "keraco-creative-agency",
  project: "care-pulse",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  hideSourceMaps: true,
  productionBrowserSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
  reactComponentAnnotation: {
    enabled: true,
  },
});
