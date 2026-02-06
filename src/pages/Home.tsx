import HomeMv from "../components/home/HomeMv";
import HomeService from "../components/home/HomeService";
import NewsList, { type NewsItem } from "../components/NewsList";

export default function Home() {
  const newsItems: NewsItem[] = [
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
      <HomeMv />
      <main className="content">
        <section className="news">
          <div className="container">
            <div className="news__inner">
              <div className="news__heading">
                <h2 className="heading-primary">ニュース</h2>
              </div>
              <div className="news__body">
                {/* このdivは箱として必要、ulは意味を持つタグなのでこれをそのまま箱として使用しない */}
                <div className="news-list">
                  {/* この{newsItems}の{}はオブジェクトではなくJSXの中で「JavaScriptの値を埋め込む」ための記号 */}
                  <NewsList items={newsItems} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <HomeService />
      </main>
    </>
  );
}
