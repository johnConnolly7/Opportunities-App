import React, { useState } from "react";

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

  // Call the parent component's filter function whenever the selected roles change
  React.useEffect(() => {
    onFilterChange(selectedRoles);
  }, [selectedRoles, onFilterChange]);

  return (
    <div>
      <h2>Filter by Role</h2>
      {roles.map((role) => (
        <label key={role}>
          <input
            type="checkbox"
            value={role}
            checked={selectedRoles.includes(role)}
            onChange={handleRoleChange}
          />
          {role}
        </label>
      ))}
    
    </div>
  );
}

export default RoleFilter;
