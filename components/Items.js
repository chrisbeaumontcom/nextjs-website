import Link from "next/link";
import { itemSlug } from "../helpers/utils";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.getItem(this.props.index);
  }
  render() {
    const data = this.props.data;

    return data.map((item, index) => (
      <div
        className="col-lg-4 col-md-6 col-sm-12 col-xs-12 text-center itemcell"
        key={item.id}
      >
        <div className="itembox">
          <Link
            as={`/detail/${itemSlug(item.name, item.id)}`}
            href={`/detail?id=${itemSlug(item.name, item.id)}`}
          >
            <a>
              <img
                src={item.url.replace("/image/upload/", "/image/upload/w_530/")}
                className="card-img-top sml"
              />
            </a>
          </Link>

          <div className="textbox">
            <h4>{item.name}</h4>

            <p className="card-text itemp">
              {item.medium}
              <br />
              {item.height / 10} x {item.width / 10}cm
              <br />
              {item.year}
            </p>
          </div>
        </div>
      </div>
    ));
  }
}

export default Item;
