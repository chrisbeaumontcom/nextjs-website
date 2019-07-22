import Layout from "../components/Layout/Layout";
import content from "../content/cv";

const pageTitle = "Curriculum Vitae";

function createMarkup() {
  return { __html: content };
}

const pageContent = (
  <div>
    <div dangerouslySetInnerHTML={createMarkup()} />
  </div>
);

const CV = () => (
  <div>
    <Layout title={pageTitle} content={pageContent} />
  </div>
);

export default CV;
