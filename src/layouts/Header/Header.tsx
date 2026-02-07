import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { useState, useEffect } from "react";
export default function Header() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.gnavLink} ${styles.gnavLinkActive}` : styles.gnavLink;

  const [open, setOpen] = useState(false);
  useEffect(() => {
    console.log("メニューの開閉状態が変更されました", open);
  }, [open]);

  // openの間だけスクロール禁止　、“prev=今その瞬間のbodyのstyle属性の値”,
  // cssを書き換えたり入れ替えているのではなくcssより直近のDOMそのものでstylesそのものでstylesを書き換えている。
  // 流れはstate変更→再レンダー→DOM更新→useEffect発火(超大事)
  // return cleanupは登録だけされて実行されるのはstateが再度変更されて新しいeffectが実行される直前、またはコンポーネントが消える直前
  useEffect(() => {
    if (!open) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // 閉じたら元に戻す
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

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
