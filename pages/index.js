import Prismic from 'prismic-javascript';
import PropTypes from 'prop-types';
import { Client } from '../prismic-configuration';
import Layout from '../components/Layout/Layout';
import HomePosts from '../components/HomePosts';

function Home(props) {
  const pageTitle = 'Home';
  const pageContent = <HomePosts posts={props.posts} />;
  return (
    <div>
      <Layout title={pageTitle} content={pageContent} />
    </div>
  );
}

Home.getInitialProps = async function({ req }) {
  const home = await Home.getBlogHome(req);
  // if (process.browser) window.prismic.setupEditButton();
  //
  // const a = home.response.results;
  // a.forEach(el => {
  //   console.log(el.data.blurb);
  //   console.log('---------------');
  // });
  return {
    // State variable for the home blog posts
    posts: home.response.results,
  };
};
Home.getBlogHome = async function(req) {
  try {
    const response = await Client(req).query(Prismic.Predicates.at('document.type', 'home_item'), {
      orderings: '[my.home_item.order]',
    });
    return { response };
  } catch (error) {
    // console.error(error);
    return error;
  }
};

Home.propTypes = {
  posts: PropTypes.array,
};

export default Home;
