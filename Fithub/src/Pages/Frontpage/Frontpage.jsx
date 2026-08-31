import cover1 from "../../assets/cover1.jpg";
import cover2 from "../../assets/cover2.jpg";
import style from "./Frontpage.module.scss";

export function Frontpage() {
  return (
    <>
      <img className={style.pic1} src={cover2} alt="" />
      <img src={cover1} alt="" />
    </>
  );
}
