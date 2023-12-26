import "./CheckBox.css";

type Props = {
  category: string;
};

function CheckBox(props: Props) {
  return (
    <div>
      <button type="button" className="cate__button"></button>
      <a className="cate__title">{props.category}</a>
    </div>
  );
}

export default CheckBox;
