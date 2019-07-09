import React, { useState } from 'react'
import ResourceList from './ResourceList'
import UserList from './UserList'
 const App = () =>  {
    const [resource, setResource ] = useState('posts')
    return (
    <div>
      <UserList />
      <div>
        {/* on click  run a function that will call setResource and updates it to posts or todos */}
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>  
      </div>      
        <ResourceList resource={resource} />
    </div>
      )
  }

export default App