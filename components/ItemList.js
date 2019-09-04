import Items from "./Items";
import Fetch from "./Fetch";
import Loading from "./Loading";
import Error from "./Error";
import PropTypes from "prop-types";

export default function ItemList(props) {
  return (
    <div className="container">
      <Fetch galleryShow={props.galleryShow}>
        {({ loaded, error, items }) => (
          <div className="row">
            {!loaded && <Loading />}
            {error && <Error error={error} />}
            {loaded && <Items data={items} />}
          </div>
        )}
      </Fetch>
    </div>
  );
}

ItemList.propTypes = {
  galleryShow: PropTypes.string
};
