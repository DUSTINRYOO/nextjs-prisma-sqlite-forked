import useSWR from "swr";

export default function useUser() {
  const { data, error } = useSWR("/api/appa");
  console.log(data);
  console.log(error);

  return { data };
}
