import cover1 from "../../assets/cover1.jpg";
import cover2 from "../../assets/cover2.jpg";
import style from "./Frontpage.module.scss";

export function Frontpage() {
  return (
    <div className={style.container}>
      <img className={style.pic1} src={cover2} alt="" />
      <div className={style.textblock}>
        <h4>Belive yourself</h4>
        <p>Train like a pro</p>
      </div>
      <img className={style.pic2} src={cover1} alt="" />
      {/* lave en link til start training */}
      <div className={style.bottomright}>Start training</div>
    </div>
  );
}
