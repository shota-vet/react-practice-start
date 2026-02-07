import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
export default function Layout() {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
// 共通部分(Header, Footerコンポーネントとか)をまとめるためのLayout,共通部分が異なるのならば複数のLayoutに分ける（例えばcompany pageにFooterがない場合とか）
// このoutletの中に <Route path="/" element={<Home />} /><Route path="/message" element={<Message />} /><Route path="/company" element={<Company />} がネストされていて入る
