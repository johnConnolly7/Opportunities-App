import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import './OpenRoles.css'


const OpenRoles = () => {
  const [values, setValues] = useState([])
  

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
    <div className="body">
      <br />
      <span className="title">Values</span>
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
              <p>Role: {value.role[0]} {value.role[1]} {value.role[2]}</p>
            </div>
          ))
        )}
      </div>
      <br />
      <Link to="/">Go back to home screen</Link>
    </div>
  );
};

export default OpenRoles;
