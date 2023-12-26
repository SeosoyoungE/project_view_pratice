import { Route, Routes } from "react-router-dom";
import HomeHeader from "./routes/HomeHeader";
import Footer from "./routes/Foot";
import Recommend from "./routes/Recommend";
import Rank from "./routes/Rank";
import "./index.css";

function App() {
  return (
    <div className="App">
      <HomeHeader /> {/*chlidren 객체로 아래헤더 바꿀수있도록 하기 */}
      <Routes>
        <Route path="/" element={<Recommend />} />
        <Route path="/lank" element={<Rank />} />
        <Route path="/luxury" element={<h1>luxury</h1>} />
        <Route path="/man" element={<h1>man</h1>} />
        <Route path="/woman" element={<h1>woman</h1>} />
        <Route path="/discovery" element={<h1>discovery</h1>} />
        <Route path="*" element={<h1>없는페이지 입니다.</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
