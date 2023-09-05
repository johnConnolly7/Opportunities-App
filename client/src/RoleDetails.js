import { data } from "./data"
import { useParams} from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios";
import { Link } from "react-router-dom";
//import { API_ENDPOINT } from "./utils/utils";

function RoleDetails() {
    const { id } = useParams() 
    const [values, setValues] = useState()
    const [selectedForecast, setSelectedForecast] = useState([]);

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

    const handleForecastSelection = (event) => {
      const { value, checked } = event.target;
      if (checked) {
        setSelectedForecast([...selectedForecast, value]);
      } else {
        setSelectedForecast(selectedForecast.filter((item) => item !== value));
      }
    };

    const handleSaveForecast = async () => {
      try {
        const response = await axios.put(`/api/values/${id}`, {
          forecast: selectedForecast,
        });
        console.log('Updated forecast:', response.data);
      } catch (error) {
        console.error('Error updating forecast:', error);
      }
    };
    
 
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
         <p>Sales Forecast: {value.forecast}</p>
       </div>
       
     ))
   )}
 </div> 
 <form>
 <label>Sales Forecast</label>
          <ul>
            {/* Render checkbox inputs and labels for each forecast option */}
            <li>
              <label>
                <input
                  type="checkbox"
                  value="Firm (100%)"
                  checked={selectedForecast.includes("Firm (100%)")}
                  onChange={handleForecastSelection}
                />
                Firm (100%)
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Firm (100%) Working at Risk"
                  checked={selectedForecast.includes("Firm (100%) Working at Risk")}
                  onChange={handleForecastSelection}
                />
                Firm (100%) Working at Risk
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Confident (90%)"
                  checked={selectedForecast.includes("Confident (90%)")}
                  onChange={handleForecastSelection}
                />
                Confident (90%)
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Probable (60%)"
                  checked={selectedForecast.includes("Probable (60%)")}
                  onChange={handleForecastSelection}
                />
                Probable (60%)
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Probable (60%)"
                  checked={selectedForecast.includes("Probable (60%)")}
                  onChange={handleForecastSelection}
                />
                Probable (60%)
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Possible (40%)"
                  checked={selectedForecast.includes("Possible (40%)")}
                  onChange={handleForecastSelection}
                />
                Possible (40%)
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Longshot (10%)"
                  checked={selectedForecast.includes("Longshot (10%)")}
                  onChange={handleForecastSelection}
                />
                Longshot (10%)
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Lead (1%)"
                  checked={selectedForecast.includes("Lead (1%)")}
                  onChange={handleForecastSelection}
                />
                Lead (1%)
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Lost"
                  checked={selectedForecast.includes("Lost")}
                  onChange={handleForecastSelection}
                />
                Lost
              </label>
            </li>
           
          </ul>
          <button onClick={handleSaveForecast}>Save</button>
 </form>
 

 <Link to="/">Go back to home screen</Link>
</div>

  )
  }

export default RoleDetails
