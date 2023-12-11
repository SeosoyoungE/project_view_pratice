import HeaderItem from "./HeaderItem";
import styles from "./MainPageHeader.module.css";

function MainPageHeader() {
  return (
    <div className={styles.header_items}>
      <HeaderItem itemName="추천" />
      <HeaderItem itemName="랭킹" />
      <HeaderItem itemName="럭셔리" />
      <HeaderItem itemName="남성" />
      <HeaderItem itemName="여성" />
      <HeaderItem itemName="발견" />
    </div>
  );
}

export default MainPageHeader;
