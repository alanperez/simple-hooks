import { useState, useEffect} from 'react'
import axios from 'axios'

const useResources = resource => {
  // 
  const [resources, setResources] = useState([]) // useState([]) initiliazed state to be an empty array
  // resources - access to initial state, can change it with setResources function
 
 
 //  // Call fetchResource any time ResourceList first gets rendered or recieves new value for resource
 //   const fetchResource = async (resource) => {
 //     // request
 //     const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
     
 //     //calls set state to update
 //     setResources(response.data)
 //   }
 
   useEffect(() => {
     (async resource => {
       const response = await axios.get(
         `https://jsonplaceholder.typicode.com/${resource}`
         )
       setResources(response.data)
     })(resource)
 },[resource]
   )
   return resources
 }

 export default useResources;