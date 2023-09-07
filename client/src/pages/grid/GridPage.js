import { useState, useEffect } from "react"
import { AgGridReact } from 'ag-grid-react'
import axios from "axios"
import { data } from "../../data"


function GridPage() {
  const [values, setValues] = useState([])
  const [roles, setRoles ] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/values/all");
        const data = response.data;
        setValues(data);
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

  const columnDefs = [
   { headerName: "Account", field: "account" },
   { headerName: "Sector", field: "sector" },
   { headerName: "Engagement", field: "engagement" },
   { headerName: "Start Date", field: "startdate" },
   { headerName: "End Date", field: "enddate" },
   { headerName: "Sale Channel", field: "channel" },
   { headerName: "Owner", field: "owner" },
   { headerName: "Originator", field: "originator" },
   { headerName: "Role", field: "role" },
   { headerName: "Location", field: "location" },
   { headerName: "Revenue", field: "revenue" },
   { headerName: "Sales Forecast", field: "forecast" },
   { headerName: "Notes", field: "notes" },
   { headerName: "Grade", field: "grade" },
  ]
  return (
    <div className="ag-theme-alpine" style={{height: 600, width: '100%'}}>
      <AgGridReact 
      columnDefs={columnDefs}
      rowData={values}
      />
    </div>
  )
}

export default GridPage
