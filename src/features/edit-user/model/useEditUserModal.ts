import { useState } from "react";
import { User } from "../../../entities/user/types/types";

export const useEditUserModal = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const open = (user: User) => {
    setSelectedUser(user);
  };

  const close = () => {
    setSelectedUser(null);
  };

  const isOpen = selectedUser !== null;

  return {
    selectedUser,
    isOpen,
    open,
    close,
  };
};
