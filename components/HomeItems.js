import { RichText } from 'prismic-reactjs';
import LazyLoad from 'react-lazy-load';

export default function HomeItems(props) {
  const data = props.data;

  return data.map((doc, index) => (
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 home-post" key={index}>
      <h2>
        {RichText.asText(doc.data.title)}
        <LazyLoad debounce={false} offsetVertical={300}>
          <img src={doc.data.blurb_image.url} alt={doc.data.blurb_image.alt} />
        </LazyLoad>
      </h2>
      <RichText render={doc.data.blurb} />

      <hr />
      <style jsx>{`
        .home-post img {
          float: right;
          max-width: 300px;
          height: auto;
          margin: 10px;
          border: 1px solid #dadada;
        }
        .home-post hr {
          clear: both;
        }
        @media only screen and (max-width: 600px) {
          .home-post h2 {
            font-size: 1.5rem;
          }
          .home-post img {
            float: none;
            clear: both;
            margin: 10px auto;
          }
        }
      `}</style>
    </div>
  ));
}
