// src/components/Footer.jsx
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ padding: "1rem", backgroundColor: "#1e293b", color: "#94a3b8", textAlign: "center" }}>
      <p>&copy; {currentYear} Boolean Master. Todos los derechos reservados.</p>
    </footer>
  );
}
