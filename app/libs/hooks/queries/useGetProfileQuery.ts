import { useQuery } from "@tanstack/react-query";

const getProfile = async () => {
  const response = await fetch("/api/get-profile", {
    method: "GET",
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  });
  return response;
};

export const useGetProfileQuery = () => {
  return useQuery({ queryKey: ["getProfile"], queryFn: getProfile });
};
