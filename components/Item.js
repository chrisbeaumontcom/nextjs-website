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
    // const createID = (name, id) => {
    //   return name.toLowerCase().replace(/ /g, "-") + "-" + id;
    // };
    // <div className="enlarge">
    //    <a href={data.url}>
    //       Examine image&nbsp;
    //       <img src="/static/img/mag.png" alt="Click to view full image" />
    //     </a>
    // </div>
    const urlslug = itemSlug(data.name, data.id);
    return (
      <div className="itembox">
        <Link as={`/detail/${urlslug}`} href={`/detail?id=${urlslug}`}>
          <a>
            <img
              src={data.url.replace("/image/upload/", "/image/upload/w_530/")}
              className="card-img-top sml"
            />
          </a>
        </Link>

        <div className="textbox">
          <h4>{data.name}</h4>

          <p className="card-text itemp">
            {data.medium}
            <br />
            {data.height / 10} x {data.width / 10}cm
            <br />
            {data.year}
          </p>
        </div>
        <style jsx>{`
          div.itembox {
            text-align: left;
            font-size: 12px;
            margin-bottom: 15px;
            position: relative;
          }
          div.textbox {
            position: relative;
          }
          div.enlarge {
            text-align: right;
            font-size: 10px;
          }
          h4 {
            font-size: 13px;
            font-style: italic;
            margin-bottom: 2px;
            padding-left: 15px;
            padding-top: 0;
          }
          p.itemp {
            margin-top: 0;
            padding-top: 0;
            padding-left: 15px;
            margin-bottom: 0;
            padding-bottom: 0;
          }

          @media only screen and (min-width: 650px) {
            div.itembox {
              padding: 15px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Item;
