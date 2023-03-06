import { Link } from "react-router-dom";
import "./styles.css";

export function Header() {
  return (
    <header className="header">
      <div className="menu-container">
        <div className="header-img">
          <img
            className="logo-header"
            src="../../../public/images/logo.png"
            alt="logo"
          />
        </div>
        <div className="nav-header">
          <nav>
            <ul>
              <li className="nav-link">
                <a>
                  <Link to="/">Produtos</Link>
                </a>
              </li>
              <li className="nav-link-cta">
                <a>
                  <Link to="/register">Registrar produtos</Link>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
