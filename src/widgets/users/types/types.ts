import { CSSProperties } from "react";
import { User } from "../../../entities/user/types/types";

export type UsersListType = {
  users: User[];
  style?: CSSProperties;
};
