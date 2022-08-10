import React from 'react'

const Users = ({users}) => {
  return (
    <div>
   <h2>{users.name}</h2>
   <h2>{users.email}</h2>
   <p>users  ID: {users.id}</p>
    
    </div>
  )
}

export default Users