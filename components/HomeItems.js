import { RichText } from 'prismic-reactjs';

export default function HomeItems(props) {
  const data = props.data;

  return data.map((doc, index) => (
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" key={index}>
      <h2>
        {RichText.asText(doc.data.title)}
        <img className="blurb" src={doc.data.blurb_image.url} alt={doc.data.blurb_image.alt} />
      </h2>
      <RichText render={doc.data.blurb} />

      <hr />
      <style jsx>{`
        img.blurb {
          float: right;
          width: 300px;
          height: auto;
          margin: 10px;
        }
        hr {
          clear: both;
        }
        @media only screen and (max-width: 600px) {
          img.blurb {
            float: none;
            margin: 10px auto;
          }
        }
      `}</style>
    </div>
  ));
}
