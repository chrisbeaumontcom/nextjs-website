import Layout from "../components/Layout/Layout";
import ItemDisplay from "../components/ItemDisplay";
import { readItemSlug, slugToTitle } from "../helpers/utils";

const regex = /^[a-z-]+\d{1,2}$/;
// const testInput = (val, rgx) => {
//   return rgx.test(val);
// };
//let pageTitle = "Detail";

const pageContent = itemid => <ItemDisplay itemid={itemid} />;

class Detail extends React.Component {
  static async getInitialProps({ query }) {
    const urlslug =
      !!query.id && regex.test(query.id) ? query.id : "not-found-4"; // && testInput(query.id, regex)

    const itemid = readItemSlug(urlslug);
    //console.log("detail.js - itemid:" + itemid);
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

export default Detail;
