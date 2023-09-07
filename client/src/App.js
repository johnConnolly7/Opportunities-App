import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OpenRoles from "./pages/openRoles/OpenRoles"
import AddOpportunities from "./pages/form/AddOpportunities";
import RoleDetails from "./pages/details/RoleDetails";
import Header from "./components/header/Header";

function App() {
  return (
    <Router>
      <Fragment>
       <Header></Header>
        <div className="main">
          <Routes>
          <Route exact path="/" element={ <OpenRoles />} />
          <Route path="/otherpage" element={< AddOpportunities />} />
          <Route path="/:id" element={ <RoleDetails /> } />
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
