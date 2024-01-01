import { Button } from "@/app/libs/components/ui/button";
import { useDeleteAccountMutation } from "@/app/libs/hooks/mutations/useDeleteAccountMutation";
import { ButtonLoading } from "./ui/buttonloading";

const DeleteAccountButton = () => {
  const { isPending, mutate: deleteAccount } = useDeleteAccountMutation();

  return (
    <>
      {isPending ? (
        <ButtonLoading />
      ) : (
        <Button
          onClick={() => {
            deleteAccount();
          }}
        >
          Delete Account
        </Button>
      )}
    </>
  );
};

export default DeleteAccountButton;
