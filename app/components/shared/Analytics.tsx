"use client";

import Script from "next/script";

export default function Analytics() {
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const umamiUrl = process.env.NEXT_PUBLIC_UMAMI_URL || "https://cloud.umami.is";

  if (!websiteId) return null;

  return (
    <Script
      src={`${umamiUrl}/script.js`}
      data-website-id={websiteId}
      strategy="lazyOnload"
    />
  );
}