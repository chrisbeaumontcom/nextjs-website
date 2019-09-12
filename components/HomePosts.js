import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import HomeItems from './HomeItems';
import Loading from './Loading';
import Error from './Error';

export default function HomePosts(props) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const docs = props.posts;
    if (docs.length) {
      setLoaded(true);
      setItems(docs);
    } else {
      setError(true);
      setLoaded(false);
    }
    setItems(docs);
    setLoaded(true);
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

HomePosts.propTypes = {
  posts: PropTypes.any
};
