import Layout from "../components/Layout/Layout";
import ContactForm from "../components/ContactForm";

const pageTitle = "Contact";

// function createMarkup() {
//   return { __html: content };
// }

const pageContent = (
  <div className="container">
    <div className="row">
      <div className="col">
        <h2>Contact</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6">
        <ContactForm />
      </div>
      <div className="col-lg-6 text-center">
        <img
          className="port"
          src="/static/img/serge_photo_300x305.jpg"
          alt="Serge poppies"
        />
      </div>
    </div>
    <style jsx>{`
      img.port {
        width: 100%;
        max-width: 300px;
        height: auto;
        margin: 30px auto;
      }
      @media only screen and (min-width: 600px) {
      }
      .bord {
        border: 1px dotted blue;
      }
    `}</style>
  </div>
);

const Contact = () => (
  <div>
    <Layout title={pageTitle} content={pageContent} />
  </div>
);

export default Contact;
