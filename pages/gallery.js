import Layout from "../components/Layout/Layout";
import ItemList from "../components/ItemList";

const regex = /^[a-z-]+$/;
const testInput = (val, rgx) => {
  return rgx.test(val);
};

const pageContent = data => <ItemList galleryShow={data} />;

class Gallery extends React.Component {
  static async getInitialProps({ query }) {
    const title =
      !!query.id && testInput(query.id, regex)
        ? query.id
        : "selected-paintings";
    return {
      title
    };
  }

  render() {
    return (
      <div>
        <Layout
          title={this.props.title.replace(/-/g, " ")}
          content={pageContent(this.props.title)}
        />
      </div>
    );
  }
}

export default Gallery;
