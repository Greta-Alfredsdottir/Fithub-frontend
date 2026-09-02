import { Link } from "react-router";
import { useFetch } from "../../Hooks/useFetch";
import style from "./Cards.module.scss";

export function Cards() {
  // Vi henter holddata fra api, omdøber data til teams(data:)
  const {
    data: teams,
    isLoading,
    error,
  } = useFetch(import.meta.env.VITE_PUBLIC_BASE_URL + "/api/teams");
  if (isLoading) return <p>Indlæser...</p>;
  if (error) return <p>Fejl ved hentning af data</p>;

  return (
    <div className={style.Cardcontainer}>
      {/*Vi gennemgår array for (teams) hold, opretter et kort for hvert hold */}
      {teams?.map((team) => {
        {
          /*Vi finder billedstien, med ||(eller) ser vi om stien er under det første eller det andet */
        }
        const imagePath = team.image?.url || team.user?.image?.url;
        return (
          // key er påkrævet i react, til liste.
          <div key={team.id} className={style.Teamscard}>
            <img
              src={
                imagePath
                  ? import.meta.env.VITE_PUBLIC_BASE_URL + imagePath
                  : ""
              }
              alt={team.name}
            />
            <h3>{team.name}</h3>
            <p>{team.ratings || "Ingen ratings"} </p>
            {/*dynamisk link, til holdets specifikke detaljeside */}
            <Link to={`/Classdetails/?{team.id}`}></Link>
          </div>
        );
      })}
    </div>
  );
}
