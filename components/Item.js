import { useState, useEffect } from "react";
import sConfig from "../config";
import { itemSlug } from "../helpers/utils";
import PrevAndNext from "./PrevAndNext";
import Link from "next/link";

export default function Item(props) {
  const [loaded, setLoaded] = useState(0);
  const [item, setItem] = useState({});
  const [message, setMessage] = useState("");
  const [prevnext, setPrevNext] = useState([]);

  const baseurl = "/detail/";

  function checkGalleries(data, id) {
    let found = false;
    // search in gallery by id and load item into state
    const findItemById = (items, id) => {
      let foundItem = false;
      for (var i = 0; i < items.length; i++) {
        if (items[i].id == id) {
          const item = items[i];
          const p = i === 0 ? items.length - 1 : i - 1;
          const prev = baseurl + itemSlug(items[p].name, items[p].id);
          const n = i === items.length - 1 ? 0 : i + 1;
          const next = baseurl + itemSlug(items[n].name, items[n].id);
          const current = baseurl + itemSlug(items[i].name, items[i].id);
          const prevAndNext = [prev, current, next];
          setItem(item);
          setPrevNext(prevAndNext);
          setLoaded(1);
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
  }

  function getLocalData(itemid) {
    try {
      const data = sessionStorage.getItem("app-gallery-data");

      if (!!data) {
        const galleryObj = JSON.parse(data);

        if (!!galleryObj.galleries) {
          const galleries = galleryObj.galleries;
          //search through galleries
          return checkGalleries(galleries, itemid);
        }
      }
    } catch (e) {
      return false;
    }
    return false;
  }

  async function getRemoteData(id) {
    try {
      const res = await fetch(sConfig.apiHost + "?id=" + id);
      const data = await res.json();
      if (!!data && !!data.name) {
        setItem(data);
        setLoaded(1);
      } else {
        setLoaded(1);
        setMessage("No records...");
      }
    } catch (e) {
      setLoaded(2);
      setMessage("Error: " + e.message);
    }
  }

  useEffect(() => {
    // console.log("mount: " + props.itemid);
    const isLocal = getLocalData(props.itemid);
    if (!isLocal) {
      getRemoteData(props.itemid);
    }
  }, []);

  return (
    <div className="container">
      {loaded === 0 && (
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <p className="loading">
              <img src="/static/img/loader-wht.gif" alt="animation" />
              &nbsp;loading
            </p>
          </div>
        </div>
      )}
      {loaded === 2 && (
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <p className="loading">Not found: {message}</p>
          </div>
        </div>
      )}
      {loaded === 1 && (
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
            {prevnext.length === 3 && (
              <PrevAndNext pandn={prevnext} imgurl={item.url} />
            )}
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <h4 className="title">{item.name}</h4>
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
