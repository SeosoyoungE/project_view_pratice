import "./shared.css";
import "./Rank.css";
import Ranking from "../components/Ranking";
import SubTitle from "../components/SubTitle";
import Button from "../components/Button";
import Rank100 from "../components/Rank100";

export default function Rank() {
  return (
    <>
      <div className="container">
        <div className="shoes__men">
          <SubTitle eng="남성 신발 인기 순위" kor="" />
          <Ranking />
          <Button text="더보기" />
        </div>
        <div className="shoes__women">
          <SubTitle eng="여성 신발 인기 순위" kor="" />
          <Ranking />
          <Button text="더보기" />
        </div>
        <div>
          <Rank100 />
        </div>
      </div>
    </>
  );
}
