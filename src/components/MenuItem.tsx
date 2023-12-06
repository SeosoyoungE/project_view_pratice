import styles from "./MenuItem.module.css";
function MenuItem(props) {
  return (
    <div className={styles.main_item}>
      <div className={styles.main_item__box}></div>
      <a>{props.name}</a>
    </div>
  );
}
export default MenuItem;
