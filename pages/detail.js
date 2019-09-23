import PropTypes from 'prop-types';
import { Client } from '../prismic-configuration';
import Layout from '../components/Layout/Layout';
import DisplayItem from '../components/DisplayItem';
import { RichText } from 'prismic-reactjs';

const regex = /^[a-z-]+$/;

function Detail(props) {
  let pageTitle = RichText.asText(props.artwork.data.title);

  const pageContent = <DisplayItem artwork={props.artwork} />; //
  return (
    <div>
      <Layout title={pageTitle} content={pageContent} />
    </div>
  );
}

Detail.getInitialProps = async function({ req, query }) {
  const idSlug = !!query.id && regex.test(query.id) ? query.id : 'not-found-4';

  const listWork = await Detail.getItem(req, idSlug);
  // if (process.browser) window.prismic.setupEditButton();
  // console.log(listWork.response);
  return {
    artwork: listWork.response
  };
};

Detail.getItem = async function(req, uid) {
  try {
    const response = await Client(req).getByUID('artwork', uid);
    return { response };
  } catch (error) {
    // console.error(error);
    return error;
  }
};

Detail.propTypes = {
  artwork: PropTypes.object
};

export default Detail;
