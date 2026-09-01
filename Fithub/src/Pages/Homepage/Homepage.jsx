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

  //   function getTeamimage(imageArray) {
  //     const Teamimage = imageArray.filter((item) =>
  //       item.image.description.includes("name"),
  //     );
  //     return Teamimage;
  //   }

  //   const Teamimage = getTeamimage(image);
  //   console.log("Teamimage:", Teamimage[0]);
  return (
    <>
      <h2>hej</h2>
    </>
  );
}
