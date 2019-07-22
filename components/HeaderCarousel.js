import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: "/static/img/banner01zucchinis.jpg",
    altText: "Still Life with Zucchinis",
    caption: ""
  },
  {
    src: "/static/img/banner02lemons.jpg",
    altText: "Still Life with Lemons",
    caption: ""
  },
  {
    src: "/static/img/banner03artichokes.jpg",
    altText: "Still Life with Artichokes",
    caption: ""
  },
  {
    src: "/static/img/banner04cherries.jpg",
    altText: "Still Life with  Cherries",
    caption: ""
  }
];
// UncontrolledCarousel.propTypes = {
//   items: PropTypes.array.isRequired,
//   indicators: PropTypes.bool, // default: true
//   controls: PropTypes.bool, // default: true
//   autoPlay: PropTypes.bool // default: true
// };
const HeaderCarousel = () => (
  <UncontrolledCarousel indicators={false} controls={false} items={items} />
);

export default HeaderCarousel;
