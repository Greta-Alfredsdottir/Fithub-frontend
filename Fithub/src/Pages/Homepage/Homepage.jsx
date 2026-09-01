// Hente billeder fra API
// Lave en slider til classes
// billeder på slider skal kunne klikkes på
import { useFetch } from "../../Hooks/useFetch";
import { useEffect } from "react";
export function Homepage({ name }) {
  const { data, isLoading, error } = useFetch(
    import.meta.env.VITE_PUBLIC_BASE_URL + "/api/teams",
  );
  // Bruger name til at finde et hold
  const matchedTeam =
    data?.find((item) => {
      if (!name) return false;
      return item?.name?.toLowerCase() === name?.toLowerCase();
    }) || data?.[0];
  // Henter en billede sti, fra den fundet team
  const imageUrl = matchedTeam?.image?.url;
  // Sammen sætter sti, med miljøvariablen
  const fullImageUrl = imageUrl
    ? import.meta.env.VITE_PUBLIC_BASE_URL + imageUrl
    : null;

  if (isLoading) return <p>Indlæser...</p>;
  if (error) return <p>Fejl ved hentning af data</p>;

  return (
    <>
      {fullImageUrl ? (
        <img src={fullImageUrl} alt={matchedTeam?.name || "Team image"} />
      ) : (
        <p>Intet billede tilgængeligt</p>
      )}
      <h2>{matchedTeam?.name || "Intet hold valgt"}</h2>
    </>
  );
}
