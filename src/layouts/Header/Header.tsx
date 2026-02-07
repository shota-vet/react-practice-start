import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { useState } from "react";
export default function Header() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.gnavLink} ${styles.gnavLinkActive}` : styles.gnavLink;

  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src="/img/logo.svg" alt="START" />
        </Link>
        {/* aタグ使うと再読み込みされてreact使う意味なくなる(state維持) */}
      </div>
      <div className={styles.nav}>
        {/* 後から書かれたcssが優先されるからopenがtrueの時はgnavOpenのdisplayblockが勝つ、でもdisplay以外はgnavの中身が当てられる。 */}
        <nav className={`${styles.gnav} ${open ? styles.gnavOpen : ""}`}>
          <ul className={styles.gnavList}>
            <li className={styles.gnavItem}>
              <NavLink end className={navLinkClass} to="/">
                ホーム
              </NavLink>
            </li>
            <li className={styles.gnavItem}>
              <NavLink end className={navLinkClass} to="/message">
                メッセージ
              </NavLink>
            </li>
            <li className={styles.gnavItem}>
              <NavLink end className={navLinkClass} to="/company">
                会社概要
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* 三項演算子を使う、&&だとfalseの場合にfalseというclassがついてバグの原因になる。 */}
        {/* setOpen()に最新の状態を引数に取るコールバック関数で管理 */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className={`${styles.btnMenu} ${open ? styles.btnMenuActive : ""}`}
        >
          <span className={styles.btnMenuLine}></span>
        </button>
      </div>
    </header>
  );
}
