
import axios from "axios";
import { useState, useEffect } from "react";
import './OpenRoles.css'
import { data } from "./data"
import { useParams, Link, useMatch, useResolvedPath } from "react-router-dom"
import RoleFilter from "./components/filter/RoleFilter";

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
  const [values, setValues] = useState([]);
  const [roles, setRoles] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/values/all");
        const data = response.data;
        setValues(data);
        // Extract all unique roles from the data
        const allRoles = Array.from(
          new Set(data.flatMap((item) => item.role))
        );
        setRoles(allRoles);
      } catch (error) {
        console.error("Error fetching values:", error);
      }
    };

    fetchData();
  }, []);

  // Function to filter values based on selected roles
  const filteredValues = values.filter((value) =>
    selectedRoles.length === 0 || value.role.some((role) => selectedRoles.includes(role))
  );

  // Function to handle role filter changes
  const handleRoleChange = (selectedRoles) => {
    setSelectedRoles(selectedRoles);
  };

  const resetFilter = () => {
    setSelectedRoles([])
  }

  return (
    <div className="body">
      {/* Render the RoleFilter component */}
      <RoleFilter roles={roles} selectedRoles={selectedRoles} onFilterChange={handleRoleChange} />
      <button onClick={resetFilter}>Reset Filter</button>

      <div className="values">
        {filteredValues.length === 0 ? (
          <p>No values found</p>
        ) : (
          filteredValues.map((value, index) => (
            <Link to={`/${value.id}`} key={index} className="value">
              <p>Account: {value.account}</p>
              <p>Sector: {value.sector}</p>
              <p>Engagement: {value.engagement}</p>
              <p>Location: {value.location}</p>
              <p>Role: {value.role.join(", ")} </p>
            </Link>
          ))
        )}
      </div>

      <Link to="/">Go back to home screen</Link>
    </div>
  );
}

export default OpenRoles;

 