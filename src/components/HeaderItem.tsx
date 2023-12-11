import style from "./HeaderItem.module.css";

function HeaderItem(props) {
  return (
    <div className={style.header_item}>
      <a>{props.itemName}</a>
    </div>
  );
}

export default HeaderItem;
