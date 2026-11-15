export default function PageHeader({
  index,
  kicker,
  title,
  lede,
}: {
  index: string;
  kicker: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="page-head">
      <div className="wrap">
        <p className="kicker">
          {index} / {kicker}
        </p>
        <h1>{title}</h1>
        {lede ? <p className="lede">{lede}</p> : null}
      </div>
    </header>
  );
}
