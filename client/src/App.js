import { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import OpenRoles from "./OpenRoles"
import AddOpportunities from "./AddOpportunities"
import RoleDetails from "./RoleDetails";
import Header from "./components/header/Header";

function App() {
  return (
    <Router>
      <Fragment>
       <Header></Header>
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
