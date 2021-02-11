import { Navbar } from "react-bootstrap"
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="light" sticky="top">
      <Navbar.Brand><Link to="/">Banks</Link></Navbar.Brand>
      <Navbar.Brand><Link to="/calc">Calculate</Link></Navbar.Brand>
      <Navbar.Brand><Link to="/add">Add bank</Link></Navbar.Brand>
    </Navbar>
  )
}

export default MyNavbar