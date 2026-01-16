import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Alert, Flex, Input, Typography } from "antd";
import { loginRequest } from "../api/login";
import CustomButton from "../../../shared/ui/Button/CustomButton";

function Auth() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { mutate, isPending, error } = useMutation({
    mutationFn: () => loginRequest(login, password),
    onSuccess: (token) => {
      localStorage.setItem("token", token);
      navigate("/users");
    },
  });

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
        <Input
          placeholder="Логин"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />

        {error && <Alert type="error" title={error.message} />}

        <Input.Password
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Flex>
      <CustomButton
        title="Войти"
        pendingStatus={isPending}
        onClickAction={() => mutate()}
        isDisabled={!login || !password}
      />
    </Flex>
  );
}

export default Auth;
