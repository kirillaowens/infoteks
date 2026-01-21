import React from "react";
import dayjs from "dayjs";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Divider, Typography } from "antd";
import { User } from "../types/types";

const { Text, Title } = Typography;

type UserCardProps = User & {
  onClick?: (user: User) => void;
};

function UserCard({ id, name, createdAt, avatar, onClick }: UserCardProps) {
  const handleClick = (e: React.MouseEvent) => {
    console.log(`clicked ${name}`);
    onClick?.({ id, name, createdAt, avatar });
  };

  return (
    <>
      <div
        onClick={handleClick} 
        role="button"
        tabIndex={0}
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          gap: "2vw",
          cursor: "pointer",
        }}
      >
        {avatar ? <Avatar src={avatar} /> : <Avatar icon={<UserOutlined />} />}
        <div>
          <Title level={5}>{name}</Title>
          <Text>{`Зарегистрирован ${dayjs(createdAt).format("DD.MM.YYYY")}`}</Text>
        </div>
      </div>
      <Divider />
    </>
  );
}


export default UserCard;
