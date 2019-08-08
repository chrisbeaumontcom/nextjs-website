const Error = er => {
  return (
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <p className="loading">
        <h3>Error</h3>
        <p>{er.message}</p>
      </p>
    </div>
  );
};

export default Error;
