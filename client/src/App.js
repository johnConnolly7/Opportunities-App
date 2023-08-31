import { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import OpenRoles from "./OpenRoles"
import AddOpportunities from "./AddOpportunities"
import RoleDetails from "./RoleDetails";

function App() {
  return (
    <Router>
      <Fragment>
        <header className="header">
          <div>This is a johns site</div>
          <Link to="/">Add Opportunity</Link>
          <Link to="/otherpage">Open Roles</Link>
        </header>
        <div className="main">
          <Routes>
          <Route exact path="/" element={< AddOpportunities />} />
          <Route path="/otherpage" element={< OpenRoles />} />
          <Route path="/role/:id" element={ <RoleDetails /> } />
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
