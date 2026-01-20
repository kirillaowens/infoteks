import React from "react";
import { User } from "../model/types";

function UserCard({ id, name, createdAt, avatar }: User) {
  return (
    <div style={{ border: "1px solid black" }}>
      <div>UserCard</div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{createdAt}</p>
      <p>{avatar}</p>
    </div>
  );
}

export default UserCard;
