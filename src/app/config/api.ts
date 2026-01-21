import axios from "axios";
import { API_KEY } from "./api_key";
import { User } from "../../entities/user/types/types";

export type UserType = {
  id?: string;
  name: string;
  avatar: string;
  createdAt: string;
};

export const addUserAPI = async (
  user: Omit<UserType, "id">,
): Promise<UserType> => {
  const { data } = await axios.post<UserType>(`${API_KEY}/users`, user);
  return data;
};

export const getUsers = async (): Promise<User[]> => {
  const { data } = await axios.get<User[]>(`${API_KEY}/users`);
  return data;
};

export const updateUserAPI = async (user: User): Promise<User> => {
  const { data } = await axios.put<User>(`${API_KEY}/users/${user.id}`, user);
  return data;
};

export const deleteUserAPI = async (id: string): Promise<void> => {
  await axios.delete(`${API_KEY}/users/${id}`);
};
