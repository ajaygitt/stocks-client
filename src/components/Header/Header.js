
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,ButtonToolbar,Button,FormControl,Navbar,Form} from 'react-bootstrap'
import { useHistory } from 'react-router';

function Header(){
let history=useHistory()

    return(

        <div>
        <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home"> <h3>Stocks</h3> </Navbar.Brand>
    <Nav className="mr-auto">

    </Nav>
    <Form inline>
    </Form>
  </Navbar>
  </div>
    )
}
export default Header;