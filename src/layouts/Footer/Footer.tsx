import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* containerは他でも共通のクラスなのでmodule.cssに入れない */}
      <div className="container">
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link className={styles.navLink} to="/">
                ホーム
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link className={styles.navLink} to="/message">
                メッセージ
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link className={styles.navLink} to="/company">
                会社概要
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.copyright}>©START</div>
      </div>
    </footer>
  );
}
