// src/components/Main.jsx
export default function Main() {
  const currentTopic = "Arquitectura de Componentes y JSX";
  const student = { name: "Christian", role: "AI & Fullstack Dev" };

  return (
    <main style={{ padding: "2rem", minHeight: "60vh", backgroundColor: "#0f172a", color: "#e2e8f0" }}>
      <section>
        <h2>Sesión 26: {currentTopic}</h2>
        <p>Estudiante: <strong>{student.name}</strong> - <em>{student.role}</em></p>
      </section>
      <section style={{ marginTop: "1.5rem", padding: "1rem", border: "1px solid #334155", borderRadius: "8px" }}>
        <h3>Conceptos Clave de la Sesión</h3>
        <ul>
          <li>Scaffolding automatizado con Vite.</li>
          <li>Gestión centralizada de dependencias mediante pnpm.</li>
          <li>Reemplazo de la manipulación imperativa del DOM por renderizado declarativo.</li>
        </ul>
      </section>
    </main>
  );
}