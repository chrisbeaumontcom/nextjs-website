import Item from "./Item";
import fetch from "isomorphic-unfetch";
import sConfig from "../config";

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      items: null,
      itemDetails: null,
      itemView: false
    };
  }

  getItem = index => {
    const itemDetails = this.state.items[index];
    this.setState({ itemDetails });
    this.setState({ itemView: true });
  };

  async getRemoteData(gallerySlug) {
    try {
      const res = await fetch(sConfig.apiHost + "?gid=" + gallerySlug);
      const data = await res.json();

      if (data.length > 0) {
        this.setState({
          items: data,
          loaded: true
        });
        this.saveGallery(gallerySlug, data);
      }
    } catch (e) {}
  }

  saveGallery = (galleryName, data) => {
    const newGallery = {
      name: galleryName,
      items: data
    };
    try {
      const storedGalleries =
        sessionStorage.getItem("app-gallery-data") || "{}";
      let galleryObj = JSON.parse(storedGalleries);
      let galleries = galleryObj.galleries || [];
      let addGallery = true;
      galleries.map(g => {
        if (g.name === newGallery.name) {
          addGallery = false;
        }
      });
      if (addGallery) {
        galleries.push(newGallery);
      }

      const dt = new Date();
      galleryObj = {
        created: dt,
        galleries
      };

      sessionStorage.setItem("app-gallery-data", JSON.stringify(galleryObj));
      return true;
    } catch (e) {
      return false;
    }
  };

  getLocalData = gallerySlug => {
    try {
      const data = sessionStorage.getItem("app-gallery-data");
      if (data) {
        const galleryObj = JSON.parse(data);

        if (!!galleryObj.galleries) {
          const galleries = galleryObj.galleries;

          const found = galleries.find(function(el) {
            return el.name === gallerySlug;
          });

          if (found !== undefined && found.items) {
            this.setState({
              items: found.items,
              loaded: true
            });
            return true;
          }
        } else {
          return false;
        }
      }

      return false;
    } catch (e) {
      return false;
    }
  };

  componentDidMount() {
    const isLocal = this.getLocalData(this.props.galleryShow);
    if (!isLocal) {
      this.getRemoteData(this.props.galleryShow);
    }
  }

  render() {
    return (
      <div className="container">
        {!this.state.itemView && (
          <div className="row">
            {!this.state.loaded && (
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <p className="loading">
                  <img src="/static/img/loader-wht.gif" alt="" />
                  &nbsp;loading
                </p>
              </div>
            )}
            {this.state.loaded &&
              this.state.items.map((item, index) => (
                <div
                  className="col-lg-4 col-md-6 col-sm-12 col-xs-12 text-center itemcell"
                  key={item.id}
                >
                  <Item
                    index={index}
                    data={item}
                    gallery={this.props.galleryShow}
                    getItem={this.getItem}
                  />
                </div>
              ))}
          </div>
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
