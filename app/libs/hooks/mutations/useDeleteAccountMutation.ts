import { useMutation } from "@tanstack/react-query";
import { DeleteAccount } from "@/app/types";
import { useToast } from "@/app/libs/components/ui/use-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { URLS } from "@/lib/utils";

const deleteAccount = async () => {
  const response = await fetch("/api/delete-account", {
    method: "POST",
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  });
  return response;
};

export const useDeleteAccountMutation = () => {
  const { toast } = useToast();
  const router = useRouter();

  return useMutation({
    mutationFn: deleteAccount,
    onSuccess: (variables) => {
      toast({
        title: "Deleted!",
        description: "User's account has been deleted.",
      });
      Cookies.remove("profileID", variables.profileID);
      router.push(URLS.HOME_PAGE);
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "ERROR!",
        description: "Error ocurred while deleting account.",
      });
    },
  });
};
