import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Flex, Input, Typography } from "antd";
import CustomButton from "../../../shared/ul/Button/CustomButton";

function Auth() {
  return (
    <Flex
      style={{
        flexDirection: "column",
        height: "20vh",
        width: "30vw",
      }}
    >
      <Typography.Text>Авторизация</Typography.Text>
      <Flex
        style={{
          flexDirection: "column",
          gap: 12,
          margin: "20px 0",
        }}
      >
        <Input placeholder="Логин" />
        <Input.Password
          placeholder="Пароль"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Flex>
      <CustomButton title="Войти" />
    </Flex>
  );
}

export default Auth;
