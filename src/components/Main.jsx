// src/components/Main.jsx
export default function Main() {
  const currentTopic = "Architettura dei componenti e JSX";
  const student = { name: "Christian", role: "AI & Fullstack Dev" };

  return (
    <main style={{ padding: "2rem", minHeight: "60vh", backgroundColor: "#0f172a", color: "#e2e8f0" }}>
      <section>
        <h2>Lezione 26: {currentTopic}</h2>
        <p>Studente: <strong>{student.name}</strong> - <em>{student.role}</em></p>
      </section>
      <section style={{ marginTop: "1.5rem", padding: "1rem", border: "1px solid #334155", borderRadius: "8px" }}>
        <h3>Concetti Chiave della Lezione</h3>
        <ul>
          <li>Scaffolding automatizzato con Vite.</li>
          <li>Gestione centralizzata delle dipendenze tramite pnpm.</li>
          <li>Sostituzione della manipolazione imperativa del DOM con un rendering dichiarativo.</li>
        </ul>
      </section>
    </main>
  );
}