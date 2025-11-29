import './globals.css'

export const metadata = {
  title: 'MoveMint-Ledger',
  description: 'Financial ledger system for the MoveMint platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
