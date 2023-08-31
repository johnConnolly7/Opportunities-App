import { data } from "./data"
import { useParams} from "react-router-dom"
import { useState, useEffect } from "react"

function RoleDetails() {
    const { id } = useParams() 
    return (
      <RoleIndepth
      key={data.id}
      value = {data[id]}
      />
    )
}

function RoleIndepth({value}) {
  const [values, setValues] = useState(data)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/values/all");
        setValues(response.data);
        console.log('response', response.data)
      } catch (error) {
        console.error("Error fetching values:", error);
      }
    };

    fetchData();
    
  }, [setValues]); 
 
  values.forEach(item => {
    console.log('item', item.role);
  });
  return (
    <div>
      <p>Account: {value.account}</p>
      <p>Sector: {value.sector}</p>
      <p>Engagement: {value.engagement}</p>
      <p>Location: {value.location}</p>
      <p>Role: {value.role} </p>
    </div>
  )
}

export default RoleDetails
