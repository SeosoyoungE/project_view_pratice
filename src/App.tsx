import { Route, Routes } from "react-router-dom";
import Header from "./routes/Header";
import Footer from "./routes/Foot";
import Recommend from "./routes/Recommend";

import "./index.css";

function App() {
  return (
    <div className="App">
      <Header /> {/*chlidren 객체로 아래헤더 바꿀수있도록 하기 */}
      <Routes>
        <Route path="/" element={<Recommend />} />
        <Route path="/lank" element={<h1>lank</h1>} />
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
