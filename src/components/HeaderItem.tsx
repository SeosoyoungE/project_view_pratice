import style from "./HeaderItem.module.css";
import { Link } from "react-router-dom";
function HeaderItem(props) {
  return (
    <div className={style.header_item}>
      <Link to={props.to}>{props.itemName}</Link>
    </div>
  );
}

export default HeaderItem;
