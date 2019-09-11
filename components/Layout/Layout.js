import Head from 'next/head';
import Header from './Header';
import NavBar from './Navbar';
import Footer from './Footer';
import PropTypes from 'prop-types';

const contentStyle = {
  padding: 20,
  minHeight: 400
};
const siteTitle = 'Christopher Beaumont Paintings';

const Layout = props => (
  <div>
    <Head>
      <title>
        {siteTitle}: {props.title}
      </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css?family=Quicksand:300&display=swap" rel="stylesheet" />
      <link href="/static/css/style.css" rel="stylesheet" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="preload" href="/static/img/banner02lemons.jpg" as="image" />
      <link rel="preload" href="/static/img/banner03artichokes.jpg" as="image" />
      <link rel="preload" href="/static/img/banner04cherries.jpg" as="image" />
    </Head>
    <div>
      <NavBar />
      <Header title={props.title} />
      <div className="container">
        <div className="row">
          <div className="col" style={contentStyle}>
            <p>&nbsp;</p>
            {props.content}
            <p>&nbsp;</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
);

Layout.propTypes = {
  title: PropTypes.string,
  content: PropTypes.any
};

export default Layout;
