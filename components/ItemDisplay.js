import sConfig from "../config";
import { itemSlug } from "../helpers/utils";
import PrevAndNext from "./PrevAndNext";
import Link from "next/link";

class ItemDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: 0,
      item: null,
      message: "",
      prevnext: []
    };
    this.baseurl = "/detail/";
  }

  checkGalleries = (data, id) => {
    let found = false;
    // search in gallery by id and load item into state
    const findItemById = (items, id) => {
      let foundItem = false;
      for (var i = 0; i < items.length; i++) {
        if (items[i].id == id) {
          const item = items[i];
          const p = i === 0 ? items.length - 1 : i - 1;
          const prev = this.baseurl + itemSlug(items[p].name, items[p].id);
          const n = i === items.length - 1 ? 0 : i + 1;
          const next = this.baseurl + itemSlug(items[n].name, items[n].id);
          const current = this.baseurl + itemSlug(items[i].name, items[i].id);
          const prevnext = [prev, current, next];
          this.setState({
            item,
            prevnext,
            loaded: 1
          });
          console.log(prevnext);
          foundItem = true;
          break;
        }
      }
      return foundItem;
    };
    // search each stored gallery
    for (var i = 0; i < data.length; i++) {
      if (findItemById(data[i].items, id)) {
        found = true;
        break;
      }
    }
    return found;
  };

  getLocalData = itemid => {
    try {
      const data = sessionStorage.getItem("app-gallery-data");

      if (!!data) {
        const galleryObj = JSON.parse(data);

        if (!!galleryObj.galleries) {
          const galleries = galleryObj.galleries;
          //search through galleries
          return this.checkGalleries(galleries, itemid);
        }
      }
    } catch (e) {
      return false;
    }
    return false;
  };

  async getRemoteData(id) {
    try {
      const res = await fetch(sConfig.apiHost + "?id=" + id);
      const data = await res.json();
      if (!!data && !data.error && !!data[0].name) {
        // const title = data[0].name;
        this.setState({
          item: data[0],
          loaded: 1
        });
      } else {
        this.setState({
          loaded: 2,
          message: "No records..."
        });
      }
    } catch (e) {
      this.setState({
        loaded: 2,
        message: "Network error..."
      });
    }
  }

  componentDidMount() {
    const isLocal = this.getLocalData(this.props.itemid);
    if (!isLocal) {
      this.getRemoteData(this.props.itemid);
    }
  }

  render() {
    const item = this.state.item;
    let np = "";
    if (this.state.prevnext.length === 3) {
      np = "";
    }
    return (
      <div className="container">
        {this.state.loaded === 0 && (
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <p className="loading">
                <img src="/static/img/loader-wht.gif" alt="animation" />
                &nbsp;loading
              </p>
            </div>
          </div>
        )}
        {this.state.loaded === 2 && (
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <p className="loading">Not found: {this.state.message}</p>
            </div>
          </div>
        )}
        {this.state.loaded === 1 && (
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 detailbox">
              <h3>
                <Link
                  href={
                    "/gallery/" +
                    item.galleries[0].name.toLowerCase().replace(/ /g, "-")
                  }
                >
                  <a className="gallerylink">{item.galleries[0].name}</a>
                </Link>
              </h3>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 detailbox">
              <img
                src={item.url.replace("/image/upload/", "/image/upload/w_700/")}
                className="lrg"
                alt="Image"
              />
              {this.state.prevnext.length === 3 && (
                <PrevAndNext pandn={this.state.prevnext} imgurl={item.url} />
              )}
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <h4>{item.name}</h4>
              <p className="card-text itemp">
                {item.medium}
                <br />
                {item.height / 10} x {item.width / 10}cm
                <br />
                {item.year}
              </p>
            </div>
          </div>
        )}

        <style jsx>{`
          img.lrg {
            width: 100%;
            max-width: 700px;
            height: auto;
          }
          div.detailbox {
            padding-left: 0;
            padding-right: 0;
          }
          a.gallerylink {
            color: black;
          }
        `}</style>
      </div>
    );
  }
}

export default ItemDisplay;
