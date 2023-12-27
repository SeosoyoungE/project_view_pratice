import style from "./HeaderItem.module.css";
import { NavLink, Route } from "react-router-dom";

type Props = {
  to: string;
  itemName: string;
};

function HeaderItem(props: Props) {
  return (
    <div className={style.header_item}>
      <Route>
      <NavLink to={props.to}>{props.itemName}</NavLink>
      </Route>
    </div>
  );
}

export default HeaderItem;
