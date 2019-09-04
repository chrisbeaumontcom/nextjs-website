import Link from "next/link";
import PropTypes from "prop-types";

const PrevAndNext = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 text-left">
          <Link href={props.pandn[0]}>
            <a>Prev</a>
          </Link>
        </div>
        <div className="col-4 text-center">
          <a href={props.imgurl}>
            Examine image&nbsp;
            <img src="/static/img/mag.png" alt="Click to view full image" />
          </a>
        </div>
        <div className="col-4 text-right">
          <Link href={props.pandn[2]}>
            <a>Next</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

PrevAndNext.propTypes = {
  pandn: PropTypes.array,
  imgurl: PropTypes.string
};

export default PrevAndNext;
