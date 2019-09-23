import Prismic from 'prismic-javascript';
import PropTypes from 'prop-types';
import { Client } from '../prismic-configuration';
import Layout from '../components/Layout/Layout';
import ListItems from '../components/ListItems';
import { getGalleryName } from '../helpers/utils';
import sConfig from '../config';

const galleries = sConfig.galleries;
const regex = /^[a-z-]+$/;
const testInput = (val, rgx) => {
  return rgx.test(val);
};

function List(props) {
  const pageTitle = getGalleryName(props.id, galleries);
  const pageContent = (
    <div className="container">
      <div className="row">
        <div>
          <h3>{pageTitle}</h3>
        </div>
      </div>
      <div className="row">
        <ListItems id={props.id} works={props.works} />
      </div>
    </div>
  );
  return (
    <div>
      <Layout title={pageTitle} content={pageContent} />
    </div>
  );
}

List.getInitialProps = async function({ req, query }) {
  const id = !!query.id && testInput(query.id, regex) ? query.id : 'selected';

  const listWorks = await List.getList(req, id);
  // if (process.browser) window.prismic.setupEditButton();
  // console.log(listWorks.response.results);
  // console.log(simpleList(listWorks.response.results));
  // console.log(saveGallery(id, simpleList(listWorks.response.results)));

  return {
    id,
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
    // console.error(error);
    return error;
  }
};

List.propTypes = {
  id: PropTypes.string,
  works: PropTypes.array
};

export default List;
