import { useQuery } from "@tanstack/react-query";
import { useAddUserModal } from "../../../features/add-user/model/useAddUserModal";
import { getUsers } from "../../../app/config/api";
import AddUserButton from "../../../features/add-user/ui/AddUserButton";
import LogoutButton from "../../../features/logout-button/ui/LogoutButton";
import AddUserModal from "../../../features/add-user/ui/AddUserModal";
import UsersList from "../../../widgets/users/ui/UsersList";


function UsersPage() {
  const {
    data: users = [],
    isPending,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const addModal = useAddUserModal();


  return (
    <div className="page indent">
      <LogoutButton />
      
      {isPending && <div>Загрузка...</div>}
      {error && <div>Ошибка загрузки</div>}
      
      <UsersList users={users} />
      
      <AddUserButton onOpen={addModal.open} />
      <AddUserModal isOpen={addModal.isOpen} onClose={addModal.close} />

    </div>
  );
}

export default UsersPage;
