import UserCard from "../../../entities/user/ui/UserCard";
import EditUserModal from "../../../features/edit-user/ui/EditUserModal";
import { useEditUserModal } from "../../../features/edit-user/model/useEditUserModal";
import type { UsersListType } from "../types/types";
import { Typography } from "antd";

const { Title } = Typography;

const UsersList = ({ users, style }: UsersListType) => {
  const editModal = useEditUserModal();

  return (
    <>
      {users.length ? (
        <>
          <div style={style}>
            {users.map((user) => (
              <UserCard key={user.id} {...user} onClick={editModal.open} />
            ))}
          </div>

          {editModal.selectedUser && (
            <EditUserModal
              user={editModal.selectedUser}
              onClose={editModal.close}
            />
          )}
        </>
      ) : (
        <div className="flex center" style={{ margin: "5vh 0" }}>
          <Title level={3}>Нет пользователей</Title>
        </div>
      )}
    </>
  );
};

export default UsersList;
