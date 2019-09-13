import Prismic from 'prismic-javascript';
import PropTypes from 'prop-types';
import { Client } from '../prismic-configuration';
import Layout from '../components/Layout/Layout';
import ListWorks from '../components/ListWorks';

const regex = /^[a-z-]+$/;
const testInput = (val, rgx) => {
  return rgx.test(val);
};

function List(props) {
  const pageTitle = 'Home';
  const pageContent = <ListWorks works={props.works} />;
  return (
    <div>
      <Layout title={pageTitle} content={pageContent} />
    </div>
  );
}

List.getInitialProps = async function({ req, query }) {
  const id = !!query.id && testInput(query.id, regex) ? query.id : 'selected';

  console.log('id: ' + id);
  const listWorks = await List.getList(req, id);
  // if (process.browser) window.prismic.setupEditButton();
  return {
    works: listWorks.response.results
  };
};

List.getList = async function(req, tag) {
  try {
    const response = await Client(req).query(Prismic.Predicates.at('document.tags', [tag]), {
      orderings: '[my.artwork.order]'
    });
    return { response };
  } catch (error) {
    console.error(error);
    return error;
  }
};

List.propTypes = {
  works: PropTypes.any
};

export default List;
