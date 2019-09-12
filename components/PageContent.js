import { RichText, Elements } from 'prismic-reactjs';
import PropTypes from 'prop-types';

// -- Function to add unique key to props
const propsWithUniqueKey = function(props, key) {
  return Object.assign(props || {}, { key });
};

// -- HTML Serializer
// This function will be used to change the way the HTML is loaded
const htmlSerializer = function(type, element, content, children, key) {
  var props = {};
  switch (type) {
    // Add a class to paragraph elements
    case Elements.paragraph:
      props = { className: 'cv' };
      return React.createElement('p', propsWithUniqueKey(props, key), children);
    case Elements.list:
      props = { className: 'cv' };
      return React.createElement('ul', propsWithUniqueKey(props, key), children);
    // Don't wrap images in a <p> tag
    case Elements.image:
      props = { src: element.url, alt: element.alt || '' };
      return React.createElement('img', propsWithUniqueKey(props, key));
    // Return null to stick with the default behavior
    default:
      return null;
  }
};

export default function PageContent(props) {
  return (
    <div>
      <RichText render={props.title} />
      <RichText render={props.content} htmlSerializer={htmlSerializer} />
    </div>
  );
}

PageContent.propTypes = {
  title: PropTypes.any,
  content: PropTypes.any
};
