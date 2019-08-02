import { Component } from "react";
import fetch from "isomorphic-unfetch";
import sConfig from "../config";

class Fetch extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    loaded: false,
    error: false,
    items: []
  };

  async getRemoteData(gallerySlug) {
    try {
      const res = await fetch(sConfig.apiHost + "?gid=" + gallerySlug);
      const data = await res.json();

      if (data.length) {
        this.setState({
          items: data,
          loaded: true
        });
        this.saveGallery(gallerySlug, data);
      } else {
        this.setState({
          error: true,
          loaded: false
        });
      }
    } catch (e) {
      this.setState({
        error: true,
        loaded: false
      });
    }
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
    return this.props.children(this.state);
  }
}
export default Fetch;
