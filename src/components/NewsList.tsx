import { Link } from "react-router-dom";
export type NewsItem = {
  dateTime: string;
  label: string;
  title: string;
};

type Props = {
  items: NewsItem[];
};

export default function NewsList({ items }: Props) {
  return (
    <ul className="news-list__list">
      {/* アロー関数のreturnを省略して{}の代わりに()で書く書き方使っている */}
      {items.map((item) => (
        <li key={item.dateTime} className="news-list__item">
          <Link to="#" className="news-list__link">
            <div className="news-list__date">
              <time dateTime={item.dateTime} className="news__date">
                {item.label}
              </time>
            </div>
            <div className="news-list__title">{item.title}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
// Props 型は「items というプロパティを持つオブジェクトの形」を表す型で、その items の値の型が NewsItem[]

// {items}: PropsはPropsのitemsキーの値、分割代入。コンポーネントは親のJSXから作られたオブジェクト（{items:newsItems}）を受け取り分割代入する
// このコンポーネントは「Props型のオブジェクト」を1つ受け取り、そこから items プロパティを取り出している
// function NewsList({ items }: Props)←意味：Props型のオブジェクトを受け取り、その中のitemsプロパティの値をitemsという変数として受け取っている、でもitemsではなく違う変数名になるとになるとpropsにそのキーが存在しないからundefinedになる。
