type Props = {
  title: string;
};

export default function pageHeader({ title }: Props) {
  return (
    <div className="page-header">
      <div className="page-header__titleArea">
        <h2 className="page-header__title">{title}</h2>
      </div>
    </div>
  );
}

// コンポーネントは外から値をとってくるので受け取る型を定義しないといけない。
// コンポーネントは普通の単一の値を受け取る関数と違い、必ず<PageHeader title="会社概要" />のようにオブジェクトを外から受けとる。なので
//
// type Props = {
//   title: string;
// };

// export default function PageHeader(props: Props) {
//   return <h2>{props.title}</h2>;
// }
// 方法2（分割代入）← 今やってる
// export default function PageHeader({ title }: Props) {
//   return <h2>{title}</h2>;
// }
// こう書かないといけない
// {title}はオブジェクトの中のtitleの値ということ
