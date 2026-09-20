// src/components/Header.jsx
export default function Header() {
  return (
    <header style={{ padding: "1rem", backgroundColor: "#1e293b", color: "#f8fafc" }}>
      <h1>Boolean Academy - React Intro</h1>
      <nav>
        <ul style={{ display: "flex", gap: "1rem", listStyle: "none", margin: 0, padding: 0 }}>
          <li><a href="#home" style={{ color: "#38bdf8" }}>Home</a></li>
          <li><a href="#courses" style={{ color: "#38bdf8" }}>Cursi</a></li>
        </ul>
      </nav>
    </header>
  );
}