import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from "react";
import axios from "axios";

// item.js is from 3rd party API
function Item(props) {
    const [serverLink, setServerLink] = useState(process.env.REACT_APP_SERVER)

    const addToFav = async (digimon)=> {
        await axios.post(`${serverLink}/digimon`,digimon);
    }

    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.item.img} />
        <Card.Body>
            <Card.Title>{props.item.name}</Card.Title>
            <Card.Title>{props.item.level}</Card.Title>

            <Button variant="primary" onClick={()=> {addToFav(props.item)}}>Add to faves</Button>
        </Card.Body>
        </Card>
    )

}

export default Item;