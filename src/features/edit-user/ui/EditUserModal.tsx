import { useState } from "react";
import { Modal, Input, Typography, message } from "antd";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import CustomButton from "../../../shared/ui/Button/CustomButton";
import { User } from "../../../entities/user/types/types";
import { deleteUserAPI, updateUserAPI } from "../../../app/config/api";

const { Text } = Typography;

type EditUserModalProps = {
  user: User;
  onClose: () => void;
};

const EditUserModal = ({ user, onClose }: EditUserModalProps) => {
  const [name, setName] = useState(user.name);
  const [avatar, setAvatar] = useState(user.avatar);
  const queryClient = useQueryClient();

  const updateMutation = useMutation<User, Error, User>({
    mutationFn: updateUserAPI,
    onSuccess: () => {
      message.success("Пользователь обновлён");
      queryClient.invalidateQueries({ queryKey: ["users"] });
      onClose();
    },
    onError: (error) => {
      message.error(error.message);
    },
  });

  const deleteMutation = useMutation<void, Error, string>({
    mutationFn: (id) => deleteUserAPI(id),
    onSuccess: () => {
      message.success("Пользователь удалён");
      queryClient.invalidateQueries({ queryKey: ["users"] });
      onClose();
    },
    onError: (error) => {
      message.error(error.message);
    },
  });

  const pending = updateMutation.isPending || deleteMutation.isPending;

  const handleSave = () => {
    updateMutation.mutate({
      ...user,
      name: name.trim(),
      avatar: avatar.trim(),
    });
  };

  const handleDelete = () => {
    deleteMutation.mutate(user.id);
  };

  return (
    <Modal
      open={true}
      onCancel={onClose}
      title="Редактировать пользователя"
      footer={
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CustomButton
            title="Удалить"
            onClickAction={handleDelete}
            isDisabled={pending}
          />
          <div style={{ display: "flex", gap: 8 }}>
            <CustomButton
              title="Сохранить"
              onClickAction={handleSave}
              isDisabled={pending}
            />
            <CustomButton
              title="Отмена"
              onClickAction={onClose}
              isDisabled={pending}
            />
          </div>
        </div>
      }
      closable={!pending}
      maskClosable={!pending}
    >
      <div>
        <Text>id</Text>
        <Input value={user.id} style={{ margin: "7px 0" }} disabled={true} />
      </div>
      <div>
        <Text>Имя</Text>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ margin: "7px 0" }}
          disabled={pending}
        />
      </div>
      <div>
        <Text>Ссылка на аватарку</Text>
        <Input
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          style={{ margin: "7px 0" }}
          disabled={pending}
        />
      </div>
    </Modal>
  );
};

export default EditUserModal;
