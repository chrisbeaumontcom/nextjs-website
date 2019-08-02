const Error = er => {
  return (
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <p className="loading">
        <img src="/static/img/loader-wht.gif" alt="" />
        &nbsp;: Error
        <br />
        <p>{er.message}</p>
      </p>
    </div>
  );
};

export default Error;
