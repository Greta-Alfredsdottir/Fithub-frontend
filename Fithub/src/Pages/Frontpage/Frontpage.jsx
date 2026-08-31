import { useFetch } from "../../Hooks/Hooks";

export function Image() {
  const { data, isLoading, error } = useFetch(
    import.meta.env.VITE_PUBLIC_BASE_URL + "/api/image",
  );
  console.log(data);

  return (
    <div>
      <img src="cover1.jpg" alt="" />
    </div>
  );
}
