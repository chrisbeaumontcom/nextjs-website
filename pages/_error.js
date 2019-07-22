import Layout from "../components/Layout/Layout";
import ErrorDisplay from "../components/ErrorDisplay";
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

export default Error;
