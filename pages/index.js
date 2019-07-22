import Layout from "../components/Layout/Layout";
import content from "../content/home";

const pageTitle = "Home";

function createMarkup() {
  return { __html: content };
}

const pageContent = (
  <div>
    <div dangerouslySetInnerHTML={createMarkup()} />
  </div>
);

const Index = () => (
  <div>
    <Layout title={pageTitle} content={pageContent} />
  </div>
);

export default Index;
