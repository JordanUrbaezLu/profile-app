import { Button } from "@/components/ui/button";
import { useSignUpMutation } from "@/app/libs/hooks/mutations/useSignUpMutation";
import { ButtonLoading } from "./ui/buttonloading";

const SignUpCard = () => {
  const { isPending, mutate } = useSignUpMutation();

  return (
    <>
      {isPending ? (
        <ButtonLoading />
      ) : (
        <Button
          onClick={() =>
            mutate({
              email: "jordana.urbaez1@gmail.com",
              name: "Jordan Urbaez",
              password: "Jordan123",
            })
          }
        >
          Sign Up
        </Button>
      )}
    </>
  );
};

export default SignUpCard;
