import styles from "./HomeService.module.css";
export type ServiceItem = {
  icon: string;
  title: string;
  text: string;
};

type Props = {
  items: ServiceItem[];
};
export default function HomeService({ items }: Props) {
  return (
    <main className="content">
      <section className="service">
        <div className="container">
          <div className={styles.serviceHeading}>
            <h2 className={styles.headingPrimary}>サービス</h2>
          </div>
          <div>
            <div className={styles.serviceList}>
              {/* keyに使えるユニークな値を持つプロパティがないのでindexを第二引数で使用 */}
              {items.map((item, index) => (
                <div key={index} className={styles.serviceListItem}>
                  <figure className={styles.serviceListImgWrapper}>
                    {/* class="material-icons-round"→ アイコンフォントモードON */}
                    <span
                      className={`${styles.serviceListImg} material-icons-round`}
                    >
                      {item.icon}
                    </span>
                  </figure>
                  <div>
                    <div className={styles.serviceListTitle}>{item.title}</div>
                    <div className={styles.serviceListText}>
                      <p>{item.text}</p>
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
