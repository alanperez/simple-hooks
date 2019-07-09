import React from 'react'
import useResources from './useResources'

const ResourceList = ({ resource }) => {
  const resources = useResources(resource)
  
    return <ul><div>{resources.map(record => <li key={record.id}>{record.title}</li>)}</div></ul>

}
export default ResourceList