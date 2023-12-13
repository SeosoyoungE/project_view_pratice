import style from "./HeaderItem.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

type Props = {
  to: string;
  itemName: string;
};

function HeaderItem(props: Props) {
  return (
    <div className={style.header_item}>
      <Link to={props.to}>{props.itemName}</Link>
    </div>
  );
}

export default HeaderItem;
