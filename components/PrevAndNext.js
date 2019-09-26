import Link from 'next/link';
import PropTypes from 'prop-types';

const PrevAndNext = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 text-left">
          <Link href={{ pathname: '/detail', query: { id: props.pandn[0] } }} as={`/detail/${props.pandn[0]}`}>
            <a>Prev</a>
          </Link>
        </div>
        <div className="col-4 text-center">
          <a href={props.imgurl} target="_blank" rel="noopener noreferrer">
            Examine image&nbsp;
            <img src="/static/img/mag.png" alt="Click to view full image" />
          </a>
        </div>
        <div className="col-4 text-right">
          <Link href={{ pathname: '/detail', query: { id: props.pandn[2] } }} as={`/detail/${props.pandn[2]}`}>
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
