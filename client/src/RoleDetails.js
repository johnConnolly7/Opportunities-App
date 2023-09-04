import { data } from "./data"
import { useParams} from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios";
import { Link } from "react-router-dom";
//import { API_ENDPOINT } from "./utils/utils";

function RoleDetails() {
    const { id } = useParams() 
    const [values, setValues] = useState()

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`/api/values/${id}`)
          setValues(response.data)
          console.log('resdate', response.data)
        } catch (error) {
          console.error('error', error)
        }
      }
      fetchData()
    }, [id])

    if(!values) {
      return <p> Loading ...</p>
    }
 
return (
  <div className="body">
  {/* <span className="title">Values</span>  */}
  <div className="values">
   {values.length === 0 ? (
     <p>No values found</p>
   ) : (
     values.map((value, index) => (
       
       <div key={index} className="value">
         
         <p>Account: {value.account}</p>
         <p>Sector: {value.sector}</p>
         <p>Engagement: {value.engagement}</p>
         <p>Location: {value.location}</p>
         <p>Role: {value.role} </p>
       </div>
       
     ))
   )}
 </div> 
 

 <Link to="/">Go back to home screen</Link>
</div>
    // <div className="role-details">
    //   <p>Account: {value.account}</p>
    //   <p>Sector: {value.sector}</p>
    //   <p>Engagement: {value.engagement}</p>
    //   <p>Location: {value.location}</p>
    //   <p>Role: {value.role} </p>
    // </div>
  )
  }

export default RoleDetails
