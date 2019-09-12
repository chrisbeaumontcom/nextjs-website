import Layout from '../components/Layout/Layout';
import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import { Client } from '../prismic-configuration';
import PageContent from '../components/PageContent';

// function createMarkup() {
//   return { __html: content };
// }

function CV(props) {
  const pageTitle = 'Curriculum Vitae';
  const pageContent = <PageContent title={props.document.data.title} content={props.document.data.content} />;
  // (
  //   <div>
  //     <RichText render={props.document.data.content} />
  //     <style jsx>{`
  //       img.imgcontent {
  //         max-width: 400px;
  //         width: 100%;
  //         height: auto;
  //         float: right;
  //       }
  //       table.cv td {
  //         font-size: 12px;
  //       }
  //       table.cv td:first-child {
  //         vertical-align: top;
  //         padding-right: 10px;
  //       }
  //       ul.cv li {
  //         font-size: 12px;
  //       }
  //     `}</style>
  //   </div>
  // );
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
    const doc = await Client(req).getByUID('page', 'cv');
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
