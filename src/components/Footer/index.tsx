import { Link } from "react-router-dom";
import "./styles.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-column">
          <img
            className="logo-footer"
            src="../../../public/images/logo.png"
            alt="Logo da empresa Telemetrix"
          />
          <p className="footer-copyright">
            © 2023 Telemetrix, todos os direitos reservados
          </p>
        </div>
        <div className="footer-column">
          <nav className="footer-nav">
            <ul>
              <li className="nav-item">
                <a>
                  <Link to="/">Produtos</Link>
                </a>
              </li>
              <li className="nav-item">
                <a>
                  <Link to="/register">Registrar produtos</Link>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-column">
          <div className="footer-wrapper">
            <a href="https://www.linkedin.com/company/telemetrix-soluções-digitais/">
              <i className="mdi mdi-linkedin footer-icon"></i>
            </a>
            <a href="http://www.telemetrix.com.br">
              <i className="mdi mdi-web footer-icon"></i>
            </a>
          </div>
          <address className="footer-address">
            Rua Visconde Nácar, 1505 sala 701 - Centro, Curitiba, Paraná
            80401210, BR
          </address>
        </div>
      </div>
    </footer>
  );
}
