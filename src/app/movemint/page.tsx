import Link from "next/link";

export const metadata = {
  title: "MoveMint Studio",
  description: "MoveMint Studio - Your creative transaction workspace",
};

export default function MoveMintPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎨 MoveMint Studio</h1>
      <p style={{ fontSize: "1.25rem", marginBottom: "2rem", opacity: 0.9 }}>
        Track, manage, and visualize your ledger transactions
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1.5rem",
          maxWidth: "800px",
          width: "100%",
          marginTop: "2rem",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            padding: "1.5rem",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <h3 style={{ marginBottom: "0.5rem" }}>📊 Dashboard</h3>
          <p style={{ opacity: 0.8 }}>View your transaction overview</p>
        </div>

        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            padding: "1.5rem",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <h3 style={{ marginBottom: "0.5rem" }}>📝 Ledger</h3>
          <p style={{ opacity: 0.8 }}>Manage your entries</p>
        </div>

        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            padding: "1.5rem",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <h3 style={{ marginBottom: "0.5rem" }}>🔗 API</h3>
          <p style={{ opacity: 0.8 }}>
            <Link href="/api/ledger" style={{ textDecoration: "underline" }}>
              Access programmatically
            </Link>
          </p>
        </div>
      </div>

      <footer style={{ marginTop: "4rem", opacity: 0.7 }}>
        <p>MoveMint Ledger MVP v1.0</p>
      </footer>
    </main>
  );
}
