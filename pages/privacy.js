import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import { Client } from '../prismic-configuration';

import Layout from '../components/Layout/Layout';

function Privacy(props) {
  // console.log(JSON.stringify(props.document));

  const pageTitle = 'Privacy';

  const pageContent = (
    <div>
      <RichText render={props.document.data.content} />
    </div>
  );

  return (
    <div>
      <Layout title={pageTitle} content={pageContent} />
    </div>
  );
}

Privacy.getInitialProps = async function({ req }) {
  const pageData = await Privacy.getDoc(req);
  // if (process.browser) window.prismic.setupEditButton();
  return {
    // State variable that hold the queried data - doc for page info
    document: pageData.doc
  };
};
Privacy.getDoc = async function(req) {
  try {
    // Use the function to get a single document for page
    const doc = await Client(req).getSingle('page_item');

    return { doc };
  } catch (error) {
    console.error(error);
    return error;
  }
};

Privacy.propTypes = {
  document: PropTypes.any
};

export default Privacy;
