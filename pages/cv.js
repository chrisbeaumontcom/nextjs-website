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
    document: pageData.doc
  };
};

CV.getDoc = async function(req) {
  try {
    const doc = await Client(req).getByUID(pageType, pageUID);
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
