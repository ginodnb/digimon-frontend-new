import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function FavItem(props) {
    console.log(props)
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.item.digimonImg} />
        <Card.Body>
            <Card.Title>{props.item.digimonName}</Card.Title>
            <Card.Title>{props.item.digimonLevel}</Card.Title>
            <Button variant="primary" onClick={()=>props.deleteDigimon(props.item._id)}>Delete</Button>
            <Button variant="primary" onClick={()=> props.showUpdateModalProps(props.item)}>Update</Button>
        </Card.Body>
        </Card>
    )

}

export default FavItem;