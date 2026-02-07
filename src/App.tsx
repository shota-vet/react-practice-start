import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Message from "./pages/Message";
import Company from "./pages/Company";
import Layout from "./layouts/Layout";
export default function App() {
  return (
    <>
      {/* プロバイダー的な役割 */}
      <BrowserRouter>
        <Routes>
          {/* Layoutを使うことでheaderコンポーネントもURL選択されたURL階層の一部となる、今回はLayoutひとつでできている */}
          <Route element={<Layout />}>
            {/* URLがpath のとき、elementを画面に描画する pathはurlの中身*/}
            <Route path="/" element={<Home />} />
            <Route path="/message" element={<Message />} />
            <Route path="/company" element={<Company />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
// このページにコンポーネント（<Header/>とか）直接書きたくなくてRouteだけにしたいからLayoutを使って分けている
