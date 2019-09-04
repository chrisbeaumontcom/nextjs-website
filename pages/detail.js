import Layout from "../components/Layout/Layout";
import Item from "../components/Item";
import { readItemSlug, slugToTitle } from "../helpers/utils";
import PropTypes from "prop-types";

const regex = /^[a-z-]+\d{1,2}$/;

const pageContent = itemid => <Item itemid={itemid} />;

class Detail extends React.Component {
  static async getInitialProps({ query }) {
    const urlslug =
      !!query.id && regex.test(query.id) ? query.id : "not-found-4";

    const itemid = readItemSlug(urlslug);

    const title = slugToTitle(query.id);
    return {
      itemid,
      title
    };
  }

  render() {
    return (
      <div>
        <Layout
          title={this.props.title}
          content={pageContent(this.props.itemid)}
        />
      </div>
    );
  }
}

Detail.propTypes = {
  title: PropTypes.string,
  itemid: PropTypes.string
};

export default Detail;
