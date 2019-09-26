import Carousel from 'react-bootstrap/Carousel';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default function Header(props) {
  const isHome = props.title === 'Home';
  let classList = 'col-lg-4 col-md-4 col-sm-6 col-xs-12 text-right carobox';
  if (!isHome) {
    classList = 'col-lg-4 col-md-4 col-sm-6 col-xs-12 text-right d-none d-lg-block';
  }

  return (
    <div className="container-fluid headbanner">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12 banner">
            <Link href="/">
              <a className="homelink">
                <h1>Christopher Beaumont</h1>
                <h2>Paintings</h2>
              </a>
            </Link>
          </div>

          <div className={classList}>
            <Carousel controls={false} fade={true} indicators={false}>
              <Carousel.Item>
                <img className="d-block w-100" src="/static/img/banner01zucchinis.jpg" alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="/static/img/banner02lemons.jpg" alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="/static/img/banner03artichokes.jpg" alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="/static/img/banner04cherries.jpg" alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      <style scoped jsx>{`
        div.headbanner {
          background-color: #000000;
        }
        img.imgheader {
          width: 100%;
          height: auto;
        }
        a.homelink :hover {
          text-decoration: none;
        }
        .banner h1 {
          color: #ffffff;
          margin: 50px;
          margin-bottom: 2px;
          font-size: 1.6em;
          font-family: 'Quicksand', Arial, Helvetica, sans-serif;
        }
        .banner h2 {
          color: #ffffff;
          margin: 50px;
          margin-top: 2px;
          font-size: 1.1em;
          font-family: 'Quicksand', Arial, Helvetica, sans-serif;
        }
        @media only screen and (max-width: 650px) {
          .banner h1 {
            margin: 15px 20px 4px 20px;
          }
          .banner h2 {
            margin: 2px 20px 10px 20px;
          }
        }
      `}</style>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string
};
