import Link from 'next/link';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import PrevAndNext from './PrevAndNext';
import { getGalleryName } from '../helpers/utils';
import { useState, useEffect } from 'react';
import sConfig from '../config';

const galleries = sConfig.galleries;

// const galleries = getGalleries();

function sizeImage(url) {
  return url.replace('/image/upload/', '/image/upload/w_700,q_auto:best/');
}

export default function DispayItem(props) {
  const [loadedPandN, setLoadPandN] = useState(false);
  const [prevnext, setPrevNext] = useState([]);
  const baseurl = '/detail/';
  const doc = props.artwork;

  function checkGalleries(data, id) {
    let found = false;
    // search in gallery by slug and load prev and next into state
    const findItemById = (items, id) => {
      let foundItem = false;
      for (var i = 0; i < items.length; i++) {
        if (items[i] === id) {
          const p = i === 0 ? items.length - 1 : i - 1;
          const prev = baseurl + items[p];
          const n = i === items.length - 1 ? 0 : i + 1;
          const next = baseurl + items[n];
          const current = baseurl + items[i];
          const prevAndNext = [prev, current, next];
          setPrevNext(prevAndNext);
          setLoadPandN(true);
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
      const data = sessionStorage.getItem('app-gallery-data');

      if (data) {
        const galleryObj = JSON.parse(data);

        if (galleryObj.galleries) {
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

  useEffect(() => {
    if (sessionStorage) {
      getLocalData(doc.uid);
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 detailbox">
          <img className="card-img-top lrg" src={sizeImage(doc.data.image_link)} alt={RichText.asText(doc.data.title)} />
          {loadedPandN && <PrevAndNext pandn={prevnext} imgurl={doc.data.image_link} />}
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <h4 className="title">{RichText.asText(doc.data.title)}</h4>
          <RichText render={doc.data.details} />
          <p>{doc.data.year}</p>
          {doc.tags.map((tag, index) => (
            <Link key={index} href={'/gallery/' + tag}>
              <a>{getGalleryName(tag, galleries)}</a>
            </Link>
          ))}
        </div>
      </div>
      <style scoped>{`
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
DispayItem.propTypes = {
  artwork: PropTypes.object
};
