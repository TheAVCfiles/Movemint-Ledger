export const metadata = {
  title: 'MoveMint Ledger',
  description: 'MoveMint Ledger API with schema versioning and deterministic responses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
