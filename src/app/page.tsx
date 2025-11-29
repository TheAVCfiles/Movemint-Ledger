import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Welcome to MoveMint Ledger</h1>
      <p style={{ marginTop: "1rem" }}>Your trusted transaction ledger</p>
      <nav style={{ marginTop: "2rem" }}>
        <Link
          href="/movemint"
          style={{
            display: "inline-block",
            padding: "1rem 2rem",
            backgroundColor: "#0070f3",
            color: "white",
            borderRadius: "8px",
          }}
        >
          Go to MoveMint Studio
        </Link>
      </nav>
    </main>
  );
}
