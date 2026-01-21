import CustomButton from "../../../shared/ui/Button/CustomButton";
import { useLogout } from "../model/useLogout";

function LogoutButton() {
  const logout = useLogout();

  return <CustomButton onClickAction={logout} title="Выход" />;
};

export default LogoutButton;
