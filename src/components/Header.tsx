import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "gnav__link gnav__link--active" : "gnav__link";
  // オブジェクトの分割代入　isActiveという変数を作ってNavLinkから渡されるオブジェクトの中のisActiveプロパティの値をとってきている。三項演算子でページ切り替え。{ isActive }: { isActive: boolean }は{ isActive: boolean }というオブジェクト型で、さらにisActiveはBoolean型という2回型定義が書かれている
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src="/img/logo.svg" alt="START" />
        </Link>
        {/* aタグ使うと再読み込みされてreact使う意味なくなる(state維持) */}
      </div>
      <div className="header__nav">
        <nav className="gnav">
          <ul className="gnav__list">
            <li className="gnav__item">
              <NavLink end className={navLinkClass} to="/">
                ホーム
              </NavLink>
            </li>
            <li className="gnav__item">
              <NavLink end className={navLinkClass} to="/message">
                メッセージ
              </NavLink>
            </li>
            <li className="gnav__item">
              <NavLink end className={navLinkClass} to="/company">
                会社概要
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <button type="button" id="js-btn-menu" className="btn-menu">
        <span className="btn-menu__line"></span>
      </button>
    </header>
  );
}
