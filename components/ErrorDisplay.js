import PropTypes from "prop-types";

const ErrorDisplay = props => {
  const status = props.errorCode
    ? `An error [${props.errorCode}] occurred on server`
    : "An error occurred on client";
  const erStatement =
    props.errorCode === 404 ? "Sorry, page not found" : "Error";

  return (
    <div className="errordiv">
      <h2>{erStatement}</h2>
      <p>{status}</p>
      <p>
        If you think I should know about this issue let me know me on the{" "}
        <a href="/contact">contact page</a>.
      </p>
      <p>
        <img
          className="img404"
          src="https://res.cloudinary.com/web-school/image/upload/w_530/v1561372166/Paintings/lavendar_skull_izgphk.jpg"
          alt="Vanitas Still Life with Lavendar"
        />
      </p>
      <style jsx>{`
        div.errordiv {
          min-height: 400px;
          max-width: 600px;
          width: 100%;
          margin-left: auto;
          margin-right: auto;
        }

        img.img404 {
          width: 100%;
          height: auto;
          max-width: 530px;
        }
      `}</style>
    </div>
  );
};
ErrorDisplay.propTypes = {
  errorCode: PropTypes.number
};
export default ErrorDisplay;
