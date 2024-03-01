import type { ReactElement } from 'react';
import { Inter } from 'next/font/google';
import { Metadata } from '@/types/global';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });


// SEO metadata customized for "ourlime.com" (hypothetical content)
export const metadata: Metadata = {
  metadataBase: "https://ourlime.com", // Define the base URL for your site
  title: "Ourlime Communities Network",
  description: "Discover and connect with private communities on Ourlime. Explore shared interests, recipes, and tips with like-minded individuals.",
  canonical: "https://ourlime.com",
  openGraph: {
    url: "https://ourlime.com",
    title: "Ourlime Communities Network",
    description: "Discover and connect with private communities on Our Lime. Explore shared interests, recipes, and tips with like-minded individuals.",
    images: [
      {
        url: "https://ourlime.com/upload/photos/2024/01/9IlQyAhcIlvpzyHDnBt1_23_5ac6b8f1df243a4322c1a2416da57d66_avatar.png?cache=1705968873",
        width: 1200,
        height: 630,
        alt: "Ourlime Logo",
      },
    ],
    site_name: "Ourlime",
  },
};


// Fixed React component with proper type for children
export default function RootLayout({
  children,
}: {
  children: ReactElement;
}): ReactElement {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta name="twitter:card" content="summary_large_image" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
