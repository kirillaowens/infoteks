import React from 'react'
import UserCard from '../../../entities/user/ui/UserCard'
import { UsersListProps } from '../types/types';

const UsersList = ({ users }: UsersListProps) => {
  return (
    <>
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </>
  );
};

export default UsersList;