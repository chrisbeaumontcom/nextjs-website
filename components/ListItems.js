import { RichText } from 'prismic-reactjs';
import Link from 'next/link';

function sizeImage(url) {
  return url.replace('/image/upload/', '/image/upload/w_530,q_auto:best/');
}

export default function ListItems(props) {
  const data = props.data;

  return data.map((doc, index) => (
    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12" key={index}>
      <div className="itembox">
        <Link href="/detail/">
          <a>
            <img className="card-img-top sml" src={sizeImage(doc.data.image_link)} alt={RichText.asText(doc.data.title)} />
          </a>
        </Link>
        <h4 className="title">{RichText.asText(doc.data.title)}</h4>
        <RichText render={doc.data.details} />
        <p>{doc.data.year}</p>
      </div>
    </div>
  ));
}
