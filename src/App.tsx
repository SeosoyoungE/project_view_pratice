import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cloths from "./components/Cloths";
import SubTitle from "./components/SubTitle";
import Header from "./components/Header";
import MainBanner from "./components/MainBanner";
import MenuItems from "./components/MenuItems";
import Banner from "./components/Banner";
import Button from "./components/Button";
import Styles from "./components/Styles";

function App() {
  return (
    <div className="App">
      <Header /> {/*chlidren 객체로 아래헤더 바꿀수있도록 하기 */}
      <Routes>
        <Route path="/main" element={<h1>test</h1>} />
      </Routes>
      <MainBanner />
      <div className="container">
        <div className="main-items">
          <MenuItems
            name1="크림 드로우"
            name2="실시간 차트"
            name3="남성 추천"
            name4="여성 추천"
            name5="추가 10%쿠폰"
          />
          <MenuItems
            name1="정가 아래"
            name2="선데이오프클럽"
            name3="인기 롱패딩"
            name4="12월 베네핏"
            name5="스타일컬렉터 모집"
          />
        </div>

        <div className="product__release">
          <SubTitle eng="Just Dropped" kor="발매상품" />
          <Cloths />
          <Cloths />
          <Button text="더보기" />
        </div>

        <div className="product__TOPBrand">
          <SubTitle eng="TOP Brand" kor="인기 탑 브랜드" />
          <MenuItems
            name1="정가 아래"
            name2="선데이오프클럽"
            name3="인기 롱패딩"
            name4="12월 베네핏"
            name5="스타일컬렉터 모집"
          />
          <MenuItems
            name1="정가 아래"
            name2="선데이오프클럽"
            name3="인기 롱패딩"
            name4="12월 베네핏"
            name5="스타일컬렉터 모집"
          />
          <MenuItems
            name1="정가 아래"
            name2="선데이오프클럽"
            name3="인기 롱패딩"
            name4="12월 베네핏"
            name5="스타일컬렉터 모집"
          />
        </div>
      </div>
      <Banner />
      <div className="container">
        <div className="product__MostPopular">
          <SubTitle eng="Most Popular" kor="인기 상품" />
          <Cloths />
        </div>
        <div className="style__required">
          <SubTitle eng="Most Popular" kor="인기 상품" />
          <Styles />
        </div>
      </div>
    </div>
  );
}

export default App;
