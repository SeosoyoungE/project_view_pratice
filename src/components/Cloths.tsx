import Cloth from "./Cloth";
import styles from "./Cloths.module.css";
function Cloths() {
  return (
    <div className={styles.cloths}>
      <Cloth />
      <Cloth />
      <Cloth />
      <Cloth />
      <Cloth />
    </div>
  );
}

export default Cloths;
