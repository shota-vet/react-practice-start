import PageHeader from "../components/PageHeader/PageHeader.tsx";
import NewsList, { type NewsItem } from "../components/NewsList/NewsList.tsx";

export default function Company() {
  const newsItems2: NewsItem[] = [
    {
      dateTime: "2030-02-10",
      label: "2030.02.10",
      title: "コーポレートサイトをリニューアルしました。",
    },
    {
      dateTime: "2030-02-08",
      label: "2030.02.08",
      title: "採用を強化中です！一緒に働きませんか？",
    },
    {
      dateTime: "2030-02-02",
      label: "2030.02.02",
      title:
        "人材紹介SNS『スタート』をリリースしました。3/31まで新規登録キャンペーンを開催中です！サービス内で使える500ポイントをプレゼント！",
    },
  ];
  return (
    <>
      <PageHeader title="会社概要" />
      {/* ただ表示させるだけならば普通にpageHeader関数を呼んで入れるのと変わらないが、ここでコンポーネントを使うことでReactが「UIを更新する仕組み」とセットで呼んでくれる。例えばstateが変わったらそれも再レンダリングされて画面に変更が反映される。 */}
      <main className="content">
        {/* company-info */}
        <div className="company-info">
          <div className="container">
            <div className="company-info__table">
              <table className="table-type01">
                <tbody>
                  <tr>
                    <th>社名</th>
                    <td>株式会社START</td>
                  </tr>
                  <tr>
                    <th>設立</th>
                    <td>2025.02.10</td>
                  </tr>
                  <tr>
                    <th>代表取締役</th>
                    <td>ショーン・デイビット・ジュニア</td>
                  </tr>
                  <tr>
                    {" "}
                    <th>資本金</th>
                    <td>10,000,000円</td>
                  </tr>
                  <tr>
                    <th>所在地</th>
                    <td>〒555-5555 東京都千代田区 スタートビルディング 606</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="company-info__access">
              <div className="company-info__map">
                {/* JSXでは子要素が無いタグは /> で閉じられる */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.828030380878!2d139.76493611544558!3d35.68123618019435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1603888975255!5m2!1sja!2sjp"
                  width="100%"
                  height="auto"
                  style={{ border: 0 }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                />
              </div>

              <div className="company-info__map-link">
                <a
                  href="https://goo.gl/maps/b5AqA853AfsPSw1Y7"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google mapで見る
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* /company-info */}

        {/* company-news */}
        <div className="news__body">
          {" "}
          <div className="news-list">
            <NewsList items={newsItems2} />
          </div>
        </div>
        {/* /company-news */}
      </main>
    </>
  );
}
