import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="container">
        <div className="main-banner">
          <span>{count}</span>
          <span></span>
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
      </div>
    </div>
  );
}

export default App;
