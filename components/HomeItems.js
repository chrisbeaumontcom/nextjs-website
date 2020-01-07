import { RichText } from 'prismic-reactjs';
import LazyLoad from 'react-lazy-load';
import { linkResolver, hrefResolver } from '../prismic-configuration';
import { default as NextLink } from 'next/link';

const customLink = (type, element, content, children, index) => (
  <NextLink key={element.data.id + index} as={linkResolver(element.data)} href={hrefResolver(element.data)}>
    <a>{content}</a>
  </NextLink>
);

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
      <RichText render={doc.data.blurb} linkResolver={linkResolver} serializeHyperlink={customLink} />
      <hr />
    </div>
  ));
}
