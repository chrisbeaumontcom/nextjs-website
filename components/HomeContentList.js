import { useState, useEffect } from 'react';
import Prismic from 'prismic-javascript';
import HomeItems from './HomeItems';
import Loading from './Loading';
import Error from './Error';

const apiEndpoint = 'https://webschool1.cdn.prismic.io/api/v2';

export default function HomeContentList() {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [items, setItems] = useState([]);

  async function getRemoteData() {
    try {
      Prismic.getApi(apiEndpoint)
        .then(function(api) {
          return api.query(Prismic.Predicates.at('document.type', 'home_item'));
        })
        .then(
          function(response) {
            const docs = response.results;
            if (docs.length) {
              setLoaded(true);
              setItems(docs);
            } else {
              setError(true);
              setLoaded(false);
            }
            setItems(docs);
            setLoaded(true);
          }
          // ,
          // function(err) {
          //   console.log('Something went wrong: ', err);
          // }
        );
    } catch (e) {
      setError(true);
      setLoaded(false);
    }
  }

  useEffect(() => {
    getRemoteData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {!loaded && <Loading />}
        {loaded && <HomeItems data={items} />}
        {error && <Error error={error} />}
      </div>
    </div>
  );
}
