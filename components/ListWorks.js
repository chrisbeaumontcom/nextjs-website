import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ListItems from './ListItems';
import Loading from './Loading';
import Error from './Error';

export default function ListWorks(props) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const docs = props.works;
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
        {loaded && <ListItems data={items} />}
        {error && <Error error={error} />}
      </div>
    </div>
  );
}

ListWorks.propTypes = {
  works: PropTypes.any
};
