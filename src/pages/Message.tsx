import PageHeader from "../components/PageHeader/PageHeader";

export default function Message() {
  return (
    <>
      <PageHeader title="メッセージ" />
      <main className="content">
        <section className="message">
          <div className="container">
            <h3 className="message__title">
              「仕事」をきっかけに
              <br />
              人生の新しいスタートを！
            </h3>
            <div className="message__subtitle">
              大事なお仕事探しを応援させてください
            </div>
            <div className="ceo-message">
              <div className="ceo-message__img-wrapper">
                <img
                  className="ceo-message__img"
                  src="img/ceo.jpg"
                  width="100"
                  height="100"
                  alt="ショーン・デイビット・ジュニア"
                />
              </div>
              <div className="ceo-message__text">
                <p>
                  はじめまして。代表取締役社長のショーン・デイビット・ジュニアです。
                  <br />
                  私はそこそこ幸せです。それは仕事が楽しいからです。もちろん仕事イコール人生ではありません。でも仕事は人生の大事な基盤のように思っています。
                  <br />
                  株式会社STARTは、みなさんが仕事をきっかけに理想の人生を実現する手助けをしています。幸せにつながるお仕事紹介サービス
                  <a href="#">『スタート』</a>
                  や、共通の目標を目指す仲間が見つかる人材紹介SNS
                  <a href="#">『ゴール』</a>
                  を運営しています。また、Webデザインの基礎スキルを身につけられるスクール
                  <a href="#">『Webの学校』</a>も随時開講しています。
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="office">
          <div className="container">
            <img
              className="office-img"
              src="/img/office.jpg"
              width="1100"
              height="400"
              alt="会議室"
            />
          </div>
        </div>
      </main>
    </>
  );
}
