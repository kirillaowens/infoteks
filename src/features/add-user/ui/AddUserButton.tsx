import CustomButton from "../../../shared/ui/Button/CustomButton";
import { AddUserButtonType } from "../types/AddUserButtonType";

function AddUserButton({ onOpen }: AddUserButtonType) {
  return (
    <CustomButton
      onClickAction={onOpen}
      title="Создать пользователя"
      style={{ alignSelf: "flex-start" }}
    />
  );
}

export default AddUserButton;
