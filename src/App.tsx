import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cloths from "./components/Cloths";
import SubTitle from "./components/SubTitle";
import Header from "./routes/Header";
import MainBanner from "./components/MainBanner";
import MenuItems from "./components/MenuItems";
import Banner from "./components/Banner";
import Button from "./components/Button";
import Styles from "./components/Styles";
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
