import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer-nav">
          <ul className="footer-nav__list">
            <li className="footer-nav__item">
              <Link className="footer-nav__link" to="/">
                ホーム
              </Link>
            </li>
            <li className="footer-nav__item">
              <Link className="footer-nav__link" to="/message">
                メッセージ
              </Link>
            </li>
            <li className="footer-nav__item">
              <Link className="footer-nav__link" to="/company">
                会社概要
              </Link>
            </li>
          </ul>
        </nav>

        <div className="footer__copyright">©START</div>
      </div>
    </footer>
  );
}
