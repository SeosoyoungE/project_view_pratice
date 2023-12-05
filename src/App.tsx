import { useState } from "react";
import "./App.css";
import Cloth from "./components/Cloth";
import SubTitle from "./components/SubTitle";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="main-banner">
          <span className="left-arrow"></span>
          <span className="right-arrow"></span>
        </div>
        <div className="main-items">
          <div className="main-item">
            <div className="main-item__box"></div>
            <a>크림 드로우</a>
          </div>
          <div className="main-item">
            <div className="main-item__box"></div>
            <a>실시간 차트</a>
          </div>
          <div className="main-item">
            <div className="main-item__box"></div>
            <a>남성 추천</a>
          </div>
          <div className="main-item">
            <div className="main-item__box"></div>
            <a>여성 추천</a>
          </div>
          <div className="main-item">
            <div className="main-item__box"></div>
            <a>추가 10%쿠폰</a>
          </div>
          <div className="main-item">
            <div className="main-item__box"></div>
            <a>정가 아래</a>
          </div>
          <div className="main-item">
            <div className="main-item__box"></div>
            <a>선데이오프클럽</a>
          </div>
          <div className="main-item">
            <div className="main-item__box"></div>
            <a>인기 롱패딩</a>
          </div>
          <div className="main-item">
            <div className="main-item__box"></div>
            <a>12월 베네핏</a>
          </div>
          <div className="main-item">
            <div className="main-item__box"></div>
            <a>스타일컬렉터 모집</a>
          </div>
        </div>

        <div className="cloths">
          <SubTitle eng="Just Dropped" kor="발매상품" />
          <Cloth />
          <Cloth />
          <Cloth />
          <Cloth />
          <Cloth />
          <Cloth />
          <Cloth />
          <Cloth />
          <Cloth />
          <Cloth />
        </div>
      </div>
    </div>
  );
}

export default App;
