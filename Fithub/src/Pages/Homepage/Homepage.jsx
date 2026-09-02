// Hente billeder fra API
// Lave en slider til classes
// billeder på slider skal kunne klikkes på
import { useFetch } from "../../Hooks/useFetch";
import style from "./Homepage.module.scss";

export function Homepage({ name }) {
  const { data, isLoading, error } = useFetch(
    import.meta.env.VITE_PUBLIC_BASE_URL + "/api/teams",
  );
  console.log(data);

  if (isLoading) return <p>Indlæser...</p>;
  if (error) return <p>Fejl ved hentning af data</p>;
  // string "" med fuld Url + data, så ser man image
  return (
    <>
      <img
        src={"http://localhost:3000" + data?.[0].image.url}
        alt={"trainerimage"}
      />
      <h2>{data?.[0].name}</h2>

      {/* <!-- Slider main container --> */}
      <div className={style.Swipercontainer}>
        {/* <!-- Additional required wrapper --> */}
        <div className="Swiper-wrapper">
          {/* <!-- Slides --> */}
          <img
            src={"http://localhost:3000/images" + data?.[0].name.url}
            alt="Classes for you"
            className="Responsive"
          />
          ...
        </div>
      </div>
    </>
  );
}
