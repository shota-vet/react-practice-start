export default function HomeService() {
  const service = [
    {
      icon: "work",
      title: "人材紹介業",
      text: "新規サイトの制作はもちろんサイトリニューアルやランディングページの制作も可能です。",
    },
    {
      icon: "location_city",
      title: "スクール事業",
      text: "オンラインでWeb制作を学べるスクールを運営しています。",
    },
    {
      icon: "desktop_windows",
      title: "Webメディア運営",
      text: "人事系メディアやWebデザイン関連のメディアなどを複数運営しています。",
    },
  ];

  return (
    <main className="content">
      <section className="service">
        <div className="container">
          <div className="service__heading">
            <h2 className="heading-primary">サービス</h2>
          </div>
          <div className="service__body">
            <div className="service-list">
              {/* keyに使えるユニークな値を持つプロパティがないのでindexを第二引数で使用 */}
              {service.map((service, index) => (
                <div key={index} className="service-list__item">
                  <figure className="service-list__img-wrapper">
                    {/* class="material-icons-round"→ アイコンフォントモードON */}
                    <span className="service-list__img material-icons-round">
                      {service.icon}
                    </span>
                  </figure>
                  <div className="service-list__body">
                    <div className="service-list__title">{service.title}</div>
                    <div className="service-list__text">
                      <p>{service.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
