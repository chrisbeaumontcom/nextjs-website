import { RichText } from 'prismic-reactjs';
import Link from 'next/link';

//import Error from './Error';

function sizeImage(url) {
  return url.replace('/image/upload/', '/image/upload/w_530,q_auto:best/');
}

function linkUrl(val) {
  return '/detail/' + val;
}

function simpleList(objList) {
  let ar = [];
  if (objList.length > 0) {
    objList.forEach(el => {
      ar.push(el.uid);
    });
  }
  return ar;
}

function saveGallery(galleryName, data) {
  const newGallery = {
    name: galleryName,
    items: data
  };
  try {
    const storedGalleries = sessionStorage.getItem('app-gallery-data') || '{}';
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

    galleryObj = {
      galleries
    };

    sessionStorage.setItem('app-gallery-data', JSON.stringify(galleryObj));
    return true;
  } catch (e) {
    return false;
  }
}

export default function ListItems(props) {
  const data = props.works;
  const id = props.id;
  const list = simpleList(data);
  saveGallery(id, list);

  return data.map((doc, index) => (
    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12" key={index}>
      <div className="itembox">
        <Link href={linkUrl(doc.uid)}>
          <a>
            <img className="card-img-top sml" src={sizeImage(doc.data.image_link)} alt={RichText.asText(doc.data.title)} />
          </a>
        </Link>
        <h4 className="title">{RichText.asText(doc.data.title)}</h4>
        <RichText render={doc.data.details} />
        <p>{doc.data.year}</p>
      </div>
    </div>
  ));
}
