import { Button } from "@/components/ui/button";
import { useCreateAccountMutation } from "@/app/libs/hooks/mutations/useCreateAccountMutation";
import { ButtonLoading } from "./ui/buttonloading";

const CreateAccountButton = () => {
  const { isPending, mutate } = useCreateAccountMutation();

  return (
    <>
      {isPending ? (
        <ButtonLoading />
      ) : (
        <Button
          onClick={() => {
            mutate({
              email: "jordana.urbaez1@gmail.com",
              name: "Jordan Urbaez",
              password: "Jordan123",
              profileID: "12345",
            });
          }}
        >
          Create Account
        </Button>
      )}
    </>
  );
};

export default CreateAccountButton;
