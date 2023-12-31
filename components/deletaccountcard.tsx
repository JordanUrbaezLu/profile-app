import { Button } from "@/components/ui/button";
import { useDeleteAccountMutation } from "@/app/libs/hooks/mutations/useDeleteAccountMutation";
import { ButtonLoading } from "./ui/buttonloading";

const DeleteAccountCard = () => {
  const { isPending, mutate } = useDeleteAccountMutation();

  return (
    <>
      {isPending ? (
        <ButtonLoading />
      ) : (
        <Button
          onClick={() =>
            mutate({
              profileID: "12345",
            })
          }
        >
          Delete Account
        </Button>
      )}
    </>
  );
};

export default DeleteAccountCard;
