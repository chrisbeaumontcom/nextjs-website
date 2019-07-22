import Layout from "../components/Layout/Layout";

class Privacy extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pageTitle = "Privacy";

    const pageContent = (
      <div>
        <p>
          See <a href="https://policies.google.com/privacy">Google</a>,{" "}
          <a href="https://www.facebook.com/privacy/explanation">Facebook</a>{" "}
          etc......
        </p>
      </div>
    );

    return (
      <div>
        <Layout title={pageTitle} content={pageContent} />
      </div>
    );
  }
}

export default Privacy;
