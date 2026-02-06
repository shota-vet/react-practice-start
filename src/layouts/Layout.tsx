import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Layout() {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
// このoutletの中に <Route path="/" element={<Home />} /><Route path="/message" element={<Message />} /><Route path="/company" element={<Company />} がネストされていて入る
