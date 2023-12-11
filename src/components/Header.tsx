import styles from "./Header.module.css";
import MainPageHeader from "./MainPageHeader";
//이름다수정
function Header() {
  return (
    <header>
      <div className={styles.main_header}>
        <div className={styles.header__logo}>
          <a>LOGO</a>
        </div>
        <div className={styles.header__nav}>
          <div
            className={[
              styles.header__nav__item,
              styles.header__nav__item_bold,
            ].join(" ")}
          >
            <a>HOME</a>
          </div>
          <div className={styles.header__nav__item}>
            <a>STYLE</a>
          </div>
          <div className={styles.header__nav__item}>
            <a>SHOP</a>
          </div>
          <div className={styles.header__nav__item}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
      <MainPageHeader />
    </header>
  );
}

export default Header;
