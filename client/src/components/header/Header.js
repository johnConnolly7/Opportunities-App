import { Link } from "react-router-dom"
import "./Header.css"
import logo from "../../images/Credera.svg"

function Header() {
  return (
    <div className="header">
      <div className="logo-title">
        <div className="logo">
        <Link to="/" className="site-title"><img src={logo}></img></Link>
        </div>
        <div className="title">
          <h2>Open Roles</h2>
        </div>
      </div>
    <div className="nav-bar">
    <Link to="/">Add Opportunity</Link>
    <Link to="/otherpage">Open Roles</Link>
    </div>
  </div>
  )

}

export default Header
