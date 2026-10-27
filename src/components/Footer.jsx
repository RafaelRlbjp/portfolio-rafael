
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <strong>Rafael Lima</strong>
        <p>Desenvolvedor Web | Soluções Digitais</p>
        <small>
          © {new Date().getFullYear()} Rafael Lima.
          Todos os direitos reservados.
        </small>
      </div>
    </footer>
  );
}
