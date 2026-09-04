// Hente billeder fra API
// Lave en slider til classes
// billeder på slider skal kunne klikkes på
import { Cards } from "../../Components/Cards/Cards";
import { useFetch } from "../../Hooks/useFetch";
import { Navigation } from "../../Components/Navigation/Navigation";

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
      <Cards />
    </>
  );
}
