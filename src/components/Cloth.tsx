import styles from "./Cloth.module.css";

function Cloth() {
  //원래는 props로 받아와야함
  const product = {
    image: "",
    maker: "Supreme",
    detail: "Supreme x The North Face Suede Nuptse Jacket Black - 23FW",
    price: "2,650,000원",
    special: "즉시 구매가",
  };
  return (
    <div className={styles.product}>
      <div className={styles.product__image}></div>
      <a className={styles.product__maker}>{product.maker}</a>
      <a className={styles.product__detail}>{product.detail}</a>
      <a className={styles.product__price}>{product.price}</a>
      <a className={styles.product__special}>{product.special}</a>
    </div>
  );
}

export default Cloth;
