import PropTypes from 'prop-types';

const Error = () => {
  return (
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <h3>Error</h3>
      <p>Can&#39;t load content...</p>
    </div>
  );
};
Error.propTypes = {
  error: PropTypes.any
};

export default Error;
