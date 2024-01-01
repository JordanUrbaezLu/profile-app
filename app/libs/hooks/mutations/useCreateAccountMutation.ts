import { useMutation } from "@tanstack/react-query";
import { SignUp } from "@/app/types";
import { useToast } from "@/app/libs/components/ui/use-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { URLS } from "@/lib/utils";

const createAccount = async (data: SignUp) => {
  const response = await fetch("/api/create-account", {
    method: "POST",
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  });
  return response;
};

export const useCreateAccountMutation = () => {
  const { toast } = useToast();
  const router = useRouter();

  return useMutation({
    mutationFn: createAccount,
    onSuccess: (variables) => {
      toast({
        title: "Success!",
        description: "New account has been created.",
      });
      Cookies.set("profileID", variables.profileID);
      router.push(URLS.PROFILE_PAGE);
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "ERROR!",
        description: "Error ocurred while creating new account.",
      });
    },
  });
};
