import Layout from "../components/Layout/Layout";
import ItemDisplay from "../components/ItemDisplay";
import { readItemSlug } from "../helpers/utils";

const regex = /^[a-z-]+\d{1,2}$/;
const testInput = (val, rgx) => {
  return rgx.test(val);
};
//let pageTitle = "Detail";

const pageContent = itemid => <ItemDisplay itemid={itemid} />;

class Detail extends React.Component {
  static async getInitialProps({ query }) {
    const urlslug =
      !!query.id && testInput(query.id, regex) ? query.id : "not-found-4";
    // const ar = urlslug.split("-");
    // const id = ar[ar.length - 1];
    // const itemid = !isNaN(id) ? id : 4;
    const itemid = readItemSlug(urlslug);
    return {
      itemid
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
