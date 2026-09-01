import cover1 from "../../assets/cover1.jpg";
import cover2 from "../../assets/cover2.jpg";
import style from "./Frontpage.module.scss";

export function Frontpage() {
  return (
    <>
      <div class="container">
        <img class={style.pic1} src={cover2} alt="" />
        <div class="bottom-left">Bottom Left</div>
        <img class={style.pic2} src={cover1} alt="" />
        <div class="bottom-right">Bottom Right</div>
      </div>
    </>
  );
}
