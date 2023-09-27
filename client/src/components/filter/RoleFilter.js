import React, { useState } from "react";
import './RoleFilter.css'

function RoleFilter({ roles, onFilterChange }) {
  const [selectedRoles, setSelectedRoles] = useState([]);

  const handleRoleChange = (event) => {
    const roleName = event.target.value;
    setSelectedRoles((prevSelectedRoles) => {
      if (event.target.checked) {
        return [...prevSelectedRoles, roleName]
      } else {
        return prevSelectedRoles.filter((role) => role !== roleName)
      }
    } )
  
  };

 
  React.useEffect(() => {
    onFilterChange(selectedRoles);
  }, [selectedRoles, onFilterChange]);

  const splitIndex = Math.ceil(roles.length /2)
  const firstColumnRoles = roles.slice(0, splitIndex)
  const secondColumnRoles = roles.slice(splitIndex)

  return (
    <div className="filter-body">
      <h2>Filter by Role</h2>
      <div className="filter-columns">
        <div className="first-column">
          {firstColumnRoles.map((role) => (
            <label className="filter-label" key={role}>
              <input
                type="checkbox"
                value={role}
                checked={selectedRoles.includes(role)}
                onChange={handleRoleChange}
              /> 
              {role}
              <br/>
            </label>
          ))}
        </div>
        <div className="second-column">
          {secondColumnRoles.map((role) => (
            <label className="filter-label" key={role}>
              <input
                type="checkbox"
                value={role}
                checked={selectedRoles.includes(role)}
                onChange={handleRoleChange}
              />
              {role}
              <br/>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoleFilter;
