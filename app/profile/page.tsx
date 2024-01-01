"use client";

import DeleteAccountButton from "@/components/delete-account-button";
import { useGetProfileQuery } from "../libs/hooks/queries/useGetProfileQuery";

const ProfilePage = () => {
  const { data, isPending, isError, error } = useGetProfileQuery();

  return (
    <div>
      <div>{isPending ? "PENDING..." : `Welcome! ${data?.name}`}</div>
      <DeleteAccountButton />
    </div>
  );
};

export default ProfilePage;
