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
                <a href="/">
                  Produtos
                </a>
              </li>
              <li className="nav-link-cta">
                <a href="/register">
                  Registrar produtos
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
