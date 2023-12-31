import { useMutation } from "@tanstack/react-query";
import { SignUp } from "@/app/types";

const signUpUser = async (data: SignUp) => {
  const response = await fetch("/api/signup", {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        console.log("USER CREATED");
      }
      return response.json();
    })
    .catch((error) => console.log(error));
  return response;
};

export const useSignUpMutation = () => {
  return useMutation({ mutationFn: signUpUser });
};
