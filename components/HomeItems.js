import { RichText } from 'prismic-reactjs';

export default function HomeItems(props) {
  const data = props.data;

  return data.map((doc, index) => (
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" key={index}>
      <h1>{RichText.asText(doc.data.title)}</h1>
      <RichText render={doc.data.blurb} />
      <hr />
    </div>
  ));
}
