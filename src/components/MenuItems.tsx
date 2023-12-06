import MenuItem from "./MenuItem";
function MenuItems({ name1, name2, name3, name4, name5 }) {
  return (
    <>
      <MenuItem name={name1} />
      <MenuItem name={name2} />
      <MenuItem name={name3} />
      <MenuItem name={name4} />
      <MenuItem name={name5} />
    </>
  );
}
export default MenuItems;
