import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import sConfig from "../config";

export default function Fetch(props) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [items, setItems] = useState([]);

  async function getRemoteData(gallerySlug) {
    try {
      const res = await fetch(sConfig.apiHost + "?gid=" + gallerySlug);
      const data = await res.json();

      if (data.length) {
        setLoaded(true);
        setItems(data);
        saveGallery(gallerySlug, data);
      } else {
        setError(true);
        setLoaded(false);
      }
    } catch (e) {
      setError(true);
      setLoaded(false);
    }
  }

  function saveGallery(galleryName, data) {
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
  }

  function getLocalData(gallerySlug) {
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
            setLoaded(true);
            setItems(found.items);
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
  }

  useEffect(() => {
    const isLocal = getLocalData(props.galleryShow);
    if (!isLocal) {
      getRemoteData(props.galleryShow);
    }
  }, []);

  return props.children({ loaded, error, items });
}
