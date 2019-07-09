import React, { useState, useEffect } from 'react'
import axios from 'axios'
const ResourceList = ({ resource }) => {
  // 
  const [resources, setResources] = useState([]) // useState([]) initiliazed state to be an empty array
 // resources - access to initial state, can change it with setResources function


 // Call fetchResource any time ResourceList first gets rendered or recieves new value for resource
  const fetchResource = async (resource) => {
    // request
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
    
    //calls set state to update
    setResources(response.data)
  }

  useEffect(() => {
    fetchResource(resource)
  }, [resource])
  
    return <div>{resources.length}</div>

}
export default ResourceList