
import axios from "axios";
import { useState, useEffect } from "react";
import './OpenRoles.css'
import { data } from "./data"
import { useParams, Link, useMatch, useResolvedPath } from "react-router-dom"

export function RoleDetails() {
const { id } = useParams()
return data.map(value => {
  return (
    < OpenRoles
      key={value.id}
      value={value}
    />
  )
})
}

 function OpenRoles() {

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

  return (
    <div className="body">
       {/* <span className="title">Values</span>  */}
       <div className="values">
        {values.length === 0 ? (
          <p>No values found</p>
        ) : (
          values.map((value, index) => (
            <Link to={`/${value.id}`}>
            <div key={index} className="value">
              
              <p>Account: {value.account}</p>
              <p>Sector: {value.sector}</p>
              <p>Engagement: {value.engagement}</p>
              <p>Location: {value.location}</p>
              <p>Role: {value.role} </p>
            </div>
            </Link>
          ))
        )}
      </div> 
      

      <Link to="/">Go back to home screen</Link>
    </div>
  );
}


export default OpenRoles;
