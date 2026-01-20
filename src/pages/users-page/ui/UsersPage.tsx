import React from 'react'
import UsersList from '../../../widgets/users/ui/UsersList'
import { MOCK_USERS } from './MOCK_USERS'


function UsersPage() {
  return (
    <div className="page center">
      <UsersList users={MOCK_USERS}/>
    </div>
  )
}

export default UsersPage