import { Button } from "@/app/libs/components/ui/button";
import { ButtonLoading } from "./ui/buttonloading";

const CreateAccountButton = ({
  type,
  isPending,
}: {
  type: "reset" | "button" | "submit" | undefined;
  isPending: boolean;
}) => {
  return (
    <>
      {isPending ? (
        <ButtonLoading />
      ) : (
        <Button type={type}>Create Account</Button>
      )}
    </>
  );
};

export default CreateAccountButton;
