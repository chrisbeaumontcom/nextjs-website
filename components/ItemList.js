import Items from "./Items";
import Fetch from "./Fetch";
import Loading from "./Loading";
import Error from "./Error";

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemDetails: null,
      itemView: false
    };
  }

  getItem = index => {
    const itemDetails = this.state.items[index];
    this.setState({ itemDetails });
    this.setState({ itemView: true });
  };

  render() {
    return (
      <div className="container">
        {!this.state.itemView && (
          <Fetch galleryShow={this.props.galleryShow}>
            {({ loaded, error, items }) => (
              <div className="row">
                {!loaded && <Loading />}
                {error && <Error error={error} />}
                {loaded && (
                  <Items
                    data={items}
                    gallery={this.props.galleryShow}
                    getItem={this.getItem}
                  />
                )}
              </div>
            )}
          </Fetch>
        )}
        <style jsx>{`
          div.itemcell {
            padding-left: 4px;
            padding-right: 4px;
          }
          p.loading {
            text-align: center;
          }
        `}</style>
      </div>
    );
  }
}

export default ItemList;
