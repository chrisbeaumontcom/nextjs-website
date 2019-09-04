import Layout from "../components/Layout/Layout";
import ErrorDisplay from "../components/ErrorDisplay";
import PropTypes from "prop-types";
const pageTitle = "Error Page";

const pageContent = data => <ErrorDisplay errorCode={data} />;

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <div>
        <Layout
          title={pageTitle}
          content={pageContent(this.props.statusCode)}
        />
      </div>
    );
  }
}

Error.propTypes = {
  statusCode: PropTypes.number
};

export default Error;
