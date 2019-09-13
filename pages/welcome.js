import Layout from '../components/Layout/Layout';
import PropTypes from 'prop-types';
import { Client } from '../prismic-configuration';
import PageContent from '../components/PageContent';

const pageType = 'pagecontent';
const pageUID = 'welcome';

function Welcome(props) {
  const pageTitle = 'Welcome';
  const pageContent = <PageContent title={props.document.data.title} content={props.document.data.content} />;

  return (
    <div>
      <Layout title={pageTitle} content={pageContent} />
    </div>
  );
}

Welcome.getInitialProps = async function({ req }) {
  const pageData = await Welcome.getDoc(req);
  // if (process.browser) window.prismic.setupEditButton();
  return {
    // State variable that hold the queried data - doc for page info
    document: pageData.doc
  };
};

Welcome.getDoc = async function(req) {
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

Welcome.propTypes = {
  document: PropTypes.any
};

export default Welcome;
