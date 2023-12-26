import styles from "./ShopFillter.module.css";
import "./ShopFillter.css";
import "./CheckBox";
import { useState } from "react";
import CheckBox from "./CheckBox";

function ShopFillter() {
  const [openClose, setOC] = useState(false);
  const [openClose2, setOC2] = useState(false);
  const [openClose3, setOC3] = useState(false);
  const [openClose4, setOC4] = useState(false);
  const [openClose5, setOC5] = useState(false);
  function clickEvent() {
    setOC(!openClose);
  }
  function clickEvent2(event) {
    if (openClose2) {
      event.target.classList.add("border");
    } else {
      event.target.classList.remove("border");
    }
    setOC2(!openClose2);
  }
  function clickEvent3(event) {
    setOC3(!openClose3);
    event.target.style.border = "none";
  }
  function clickEvent4(event) {
    setOC4(!openClose4);
    event.target.style.border = "none";
  }
  function clickEvent5(event) {
    setOC5(!openClose5);
    event.target.style.border = "none";
  }
  return (
    <div className={styles.fillter}>
      <a className={styles.title}>필터</a>
      <div className={styles.category__names}>
        <div
          onClick={clickEvent}
          className={
            openClose
              ? styles.category__name
              : `${styles.category__name} border`
          }
        >
          <a className={styles.name}>카테고리</a>
          {openClose ? <a>-</a> : <a>+</a>}
        </div>
        {openClose ? (
          <div className={openClose ? `${styles.open} border` : styles.open}>
            <CheckBox category="아우터" />
          </div>
        ) : null}

        <div
          onClick={clickEvent2}
          className={
            openClose2
              ? styles.category__name
              : `${styles.category__name} border`
          }
        >
          <a className={styles.name}>성별</a>
          {openClose2 ? <a>-</a> : <a>+</a>}
        </div>
        {openClose2 ? (
          <div className={openClose2 ? `${styles.open} border` : styles.open}>
            까꿍
          </div>
        ) : null}

        <div
          onClick={clickEvent3}
          className={
            openClose3
              ? styles.category__name
              : `${styles.category__name} border`
          }
        >
          <a className={styles.name}>브랜드</a>
          {openClose3 ? <a>-</a> : <a>+</a>}
        </div>
        {openClose3 ? (
          <div className={openClose3 ? `${styles.open} border` : styles.open}>
            까꿍
          </div>
        ) : null}

        <div
          onClick={clickEvent4}
          className={
            openClose4
              ? styles.category__name
              : `${styles.category__name} border`
          }
        >
          <a className={styles.name}>컬렉션</a>
          {openClose4 ? <a>-</a> : <a>+</a>}
        </div>
        {openClose4 ? (
          <div className={openClose4 ? `${styles.open} border` : styles.open}>
            까꿍
          </div>
        ) : null}

        <div
          onClick={clickEvent5}
          className={
            openClose5
              ? styles.category__name
              : `${styles.category__name} border`
          }
        >
          <a className={styles.name}>사이즈</a>
          {openClose5 ? <a>-</a> : <a>+</a>}
        </div>
        {openClose5 ? (
          <div className={openClose5 ? `${styles.open} border` : styles.open}>
            까꿍
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ShopFillter;
