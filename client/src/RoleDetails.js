import { data } from "./data"
import { useParams} from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios";
import { Link } from "react-router-dom";
import EditRole from "./components/edit/EditRole";
//import { API_ENDPOINT } from "./utils/utils";

function RoleDetails() {
    const { id } = useParams() 
    const [values, setValues] = useState()
    const [selectedForecast, setSelectedForecast] = useState([]);
    const [isEditing, setIsEditing ] = useState(false)

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

    const toggleEdit = () => {
      setIsEditing(!isEditing)
    }
    
 
return (
  <div className="body">
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
         <p>Sales Forecast: {value.forecast}</p>
       </div>
       
     ))
   )}
 </div> 
 <button onClick={toggleEdit}>Edit</button>
 {isEditing && (
  <EditRole 
  id={id}
  selectedForecast={selectedForecast}
  setSelectedForecast={setSelectedForecast}
  onClose={toggleEdit}
  />
 )}
 
 

 <Link to="/">Go back to home screen</Link>
</div>

  )
  }

export default RoleDetails
