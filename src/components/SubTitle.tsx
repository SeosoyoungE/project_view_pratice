import styles from "./SubTitle.module.css";

function SubTitle(props) {
  return (
    <div className={styles.title}>
      <div className={styles.eng}>{props.eng}</div>
      <div className={styles.kor}>{props.kor}</div>
    </div>
  );
}

export default SubTitle;
