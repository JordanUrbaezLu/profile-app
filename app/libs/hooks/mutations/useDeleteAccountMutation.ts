import { useMutation } from "@tanstack/react-query";
import { DeleteAccount } from "@/app/types";

const deleteAccount = async (data: DeleteAccount) => {
  const response = await fetch("/api/delete-account", {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        console.log("ACCOUNT DELETED");
      }
      return response.json();
    })
    .catch((error) => console.log(error));
  return response;
};

export const useDeleteAccountMutation = () => {
  return useMutation({ mutationFn: deleteAccount });
};
