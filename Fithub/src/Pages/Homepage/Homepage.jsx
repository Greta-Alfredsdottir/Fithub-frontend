// Hente billeder fra API
// Lave en slider til classes
// billeder på slider skal kunne klikkes på
import { useFetch } from "../../Hooks/useFetch";
import { useEffect } from "react";
export function Homepage({ name, image }) {
  const { data, isLoading, error } = useFetch(
    import.meta.env.VITE_PUBLIC_BASE_URL + "/api/teams",
  );
  useEffect(() => {
    if (data) {
      console.log("Teams data:", data);
    }
  }, [data]);

  function getTeamimage(dataArray, teamName) {
    // 1. Tjek om dataArray eksisterer og er et array
    if (!Array.isArray(dataArray)) return [];

    return dataArray.filter((item) =>
      // 2. Brug optional chaining (?.) og den rigtige variabel 'teamName'
      item?.name?.toLowerCase().includes(teamName?.toLowerCase()),
    );
  }
  // Brug 'data' direkte fra useFetch som det første argument:
  const matchedTeams = getTeamimage(data, name);
  const imageUrl = matchedTeams[0]?.image?.url;

  const baseUrl = (import.meta.env.VITE_PUBLIC_BASE_URL || "").replace(
    /\/$/,
    "",
  );
  const fullImageUrl = imageUrl ? `${baseUrl}${imageUrl}` : null;
  return (
    <>
      {fullImageUrl ? (
        <img src={fullImageUrl} alt={name || "Team image"} />
      ) : (
        <p>Henter billede...</p>
      )}
      <h2>hej</h2>
    </>
  );
}
