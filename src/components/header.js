import  Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom';
//do styles


function header() {
    return(
        <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Digimon</Navbar.Brand>
            {/* <Link to={}="/dfjglgjnlskdnfg">test</Link> */}
            <Link to={"/getAPIData"}>API Digimons</Link>
            <Link to={"/"}>Favourites</Link>
            <Link to={"/profile"}>Profile</Link>

            </Navbar>

            </>
    )

}

export default header;