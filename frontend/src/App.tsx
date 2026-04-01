import { useEffect, useState } from "react";

interface HealthResponse {
  status: string;
  version: string;
}

function App() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/v1/health")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<HealthResponse>;
      })
      .then(setHealth)
      .catch((e: Error) => setError(e.message));
  }, []);

  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Quiz Game</h1>
      {error && <p style={{ color: "red" }}>Backend unreachable: {error}</p>}
      {health && (
        <p>
          Backend status: <strong>{health.status}</strong> — v{health.version}
        </p>
      )}
      {!health && !error && <p>Connecting to backend…</p>}
    </main>
  );
}

export default App;
