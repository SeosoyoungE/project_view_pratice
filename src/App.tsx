import { Route, Routes } from "react-router-dom";
import Header from "./routes/Header";
import Footer from "./routes/Foot";
import Recommend from "./routes/Recommend";

function App() {
  return (
    <div className="App">
      <Header /> {/*chlidren 객체로 아래헤더 바꿀수있도록 하기 */}
      <Routes>
        <Route path="/" element={<Recommend />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
