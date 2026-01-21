import { useState } from "react";
import { Input, Modal, Typography, message } from "antd";
import { AddUserModalType } from "../types/AddUserModalType";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUserAPI, UserType } from "../../../app/config/api";
import CustomButton from "../../../shared/ui/Button/CustomButton";

const { Text } = Typography;

const AddUserModal = ({ isOpen, onClose }: AddUserModalType) => {
  const [name, setName] = useState("");
  const [avatarLink, setAvatarLink] = useState("");

  const queryClient = useQueryClient();

  const handleClose = () => {
    setName("");
    setAvatarLink("");
    onClose();
  };

  const mutation = useMutation<UserType, Error, Omit<UserType, "id">>({
    mutationFn: (user) => addUserAPI(user),
    onSuccess: () => {
      message.success("Пользователь успешно добавлен!");
      queryClient.invalidateQueries({ queryKey: ["users"] });
      handleClose();
    },
    onError: (error) => {
      message.error(`Ошибка: ${error.message}`);
    },
  });

  const isValidURL = (str: string) => {
    try {
      new URL(str);
      return true;
    } catch {
      return false;
    }
  };

  const handleAddUser = () => {
    if (!name.trim() || !avatarLink.trim()) {
      message.error("Пожалуйста, заполните все поля");
      return;
    }
    if (!isValidURL(avatarLink)) {
      message.error("Введите корректную ссылку на аватарку");
      return;
    }

    mutation.mutate({
      name: name.trim(),
      avatar: avatarLink.trim(),
      createdAt: new Date().toISOString(),
    });
  };

  const pending = mutation.isPending;

  return (
    <Modal
      open={isOpen}
      onCancel={handleClose}
      title="Создать пользователя"
      footer={
        <>
          <CustomButton
            title="Создать"
            onClickAction={handleAddUser}
            isDisabled={pending}
          />
          <CustomButton
            title="Отмена"
            onClickAction={handleClose}
            isDisabled={pending}
          />
        </>
      }
      closable={!pending}
      maskClosable={!pending}
    >
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
          value={avatarLink}
          onChange={(e) => setAvatarLink(e.target.value)}
          style={{ margin: "7px 0" }}
          disabled={pending}
        />
      </div>
    </Modal>
  );
};

export default AddUserModal;
