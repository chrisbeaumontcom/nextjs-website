import Link from 'next/link';

const Footer = () => (
  <div className="container-fluid">
    <div className="container">
      <footer>
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 text-center footboximg">
            <Link href="/">
              <a>
                <img src="/static/img/banner02lemons.jpg" alt="Still life with Lemons" className="imgfooter" />
              </a>
            </Link>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 footbox">
            <h2>Christopher Beaumont</h2>
            <p>
              &copy;{new Date().getFullYear()} Christopher Beaumont
              <br />
              All rights reserved
              <br />
              Painted in Melbourne
              <br />
              Australia
            </p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12" />
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 footbox">
            <h2>Questions?</h2>
            <ul>
              <li>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <a>Privacy Policy</a>
                </Link>
              </li>
              <li>
                Version: 1.1 <br />
                <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                  Next.js
                </a>
                /
                <a href="https://prismic.io/" rel="noopener noreferrer">
                  Prismic CMS
                </a>
                /
                <a href="https://zeit.co/" rel="noopener noreferrer">
                  Zeit Now
                </a>
                /
                <a href="https://github.com/" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="http://instagram.com/chrisbeaumontcom">
                  <img src="/static/img/soc-insta-30.png" alt="Instagram" title="Instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
    <style scoped jsx>{`
      .container-fluid {
        background-color: #222222;
        padding-top: 20px;
        padding-bottom: 20px;
      }
      .social {
        padding: 5px 12px;
      }
      img.imgfooter {
        max-width: 300px;
        width: 100%;
        height: auto;
        margin: 0 auto 15px auto;
      }
      .footbox {
        padding-left: 14px;
        padding-right: 14px;
        color: #fff;
      }
      .footboximg {
        padding-top: 0;
        padding-left: 14px;
        padding-right: 14px;
        color: #fff;
      }
      .footbox a {
        color: #fff;
      }
      .footbox h2 {
        text-transform: uppercase;
        font-size: 11px;
        border-bottom: 1px solid #fff;
        margin-top: 0;
        font-weight: normal;
      }
      .footbox ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      .footbox ul li {
        text-transform: uppercase;
        font-size: 10px;
        font-weight: normal;
      }
      .footbox ul.list-inline li {
        padding: 0;
        margin: 0;
      }
      .footbox p {
        text-transform: uppercase;
        font-size: 10px;
        font-weight: normal;
      }
    `}</style>
  </div>
);

export default Footer;
