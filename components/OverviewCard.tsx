interface Props {
  title: string;
  content: string;
}

export default function OverviewCard(props: Props) {
  return (
    <div className="column">
      <div className="card" style={{height: "100%"}}>
        <div className="card-content">
          <div className="content">
            <h2 className="title is-size-6">{props.title}</h2>
            <p className="has-text-weight-semibold has-text-primary is-size-4">{props.content}</p>
          </div>
        </div> 
      </div>
    </div>
  );
}
