import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MoveMint™ | Stageport — Professional Studio Management',
  description: 'MoveMint™ by Stageport: The ultimate ledger and management solution for dance studios, performing arts centers, and creative education facilities.',
  keywords: ['dance studio', 'studio management', 'performing arts', 'ledger', 'attendance tracking', 'MoveMint', 'Stageport'],
  authors: [{ name: 'Stageport Technologies' }],
  openGraph: {
    title: 'MoveMint™ | Stageport — Professional Studio Management',
    description: 'The complete ledger and management platform for dance studios and performing arts centers.',
    type: 'website',
    locale: 'en_US',
    siteName: 'MoveMint by Stageport',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MoveMint™ | Stageport',
    description: 'Professional studio management for dance studios and performing arts centers.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
