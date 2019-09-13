import PropTypes from 'prop-types';
import { Client } from '../prismic-configuration';
import Layout from '../components/Layout/Layout';
import PageContentCV from '../components/PageContentCV';

const pageType = 'pagecontent';
const pageUID = 'privacy';

function Privacy(props) {
  const pageTitle = 'Privacy Policy';
  const pageContent = <PageContentCV title={props.document.data.title} content={props.document.data.content} />;

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
    const doc = await Client(req).getByUID(pageType, pageUID);
    // console.log(JSON.stringify(doc));
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
