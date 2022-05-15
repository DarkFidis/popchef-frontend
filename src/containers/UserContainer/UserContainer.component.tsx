import React, {useEffect, useState} from "react";
import {userService} from "../../services/user.service";
import { User } from '../../types/user'

export const UserContainer: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])
  useEffect(() => {
    userService.getAll().then(data => {
      setUsers(data)
    })
  }, [])
  return (
    <>
      {users && users.map((user, key) => (
        <p key={key}>Bienvenue {user.firstName} {user.lastName}, {user.age}</p>
      )) }
    </>
  )
}
