import Layout from '../components/Layout/Layout';
import PropTypes from 'prop-types';
import { Client } from '../prismic-configuration';
import PageContentCV from '../components/PageContentCV';

const pageType = 'pagecontent';
const pageUID = 'cv';

function CV(props) {
  const pageTitle = 'Curriculum Vitae';
  const pageContent = <PageContentCV title={props.document.data.title} content={props.document.data.content} />;

  return (
    <div>
      <Layout title={pageTitle} content={pageContent} />
    </div>
  );
}

CV.getInitialProps = async function({ req }) {
  const pageData = await CV.getDoc(req);
  // if (process.browser) window.prismic.setupEditButton();
  return {
    // State variable that hold the queried data - doc for page info
    document: pageData.doc
  };
};

CV.getDoc = async function(req) {
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

CV.propTypes = {
  document: PropTypes.any
};

export default CV;
