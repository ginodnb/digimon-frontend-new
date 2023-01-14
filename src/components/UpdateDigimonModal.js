import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function UpdateDigimonModal(props) {
const [serverLink, setServerLink] = useState(process.env.REACT_APP_SERVER);

    const updateItemInfo = async (e) => {
        e.preventDefault();
        const itemData = {
            digimonName: e.target.name.value,
            digimonImg: e.target.img.value,
            digimonLevel: e.target.level.value,
        }

        console.log('after updateItemInfo func', itemData)
        const results = await axios.put(`${serverLink}/digimon/${props.itemIndex}`,itemData);

        props.handleClose();
        updateItemsArray = (results.data);
        props.updateItemsArray(results.data)

        const updateItemsArray = (data) => {
            props.updateItemsArray(data)
        }
    }




    return (
        <>
  
        <Modal show={props.show} onHide={props.handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Update</Modal.Title>
          </Modal.Header>
          <Form onSubmit={updateItemInfo}>
      <Form.Group className="mb-3" controlId="name">
      {/* <Form.Label>name</Form.Label> */}
      {/* <Form.Control defaultValue={props.itemInfo.digimonName} type="text" placeholder="Enter stuff" name="name"/> */}

      </Form.Group>

      <Form.Group className="mb-3" controlId="level">
      {/* <Form.Label>Level</Form.Label> */}
      {/* <Form.Control defaultValue={props.itemInfo.digimonLevel} type="text" placeholder="Enter stuff" name="level"/> */}

      </Form.Group>
      <Form.Group className="mb-3" controlId="image">
      {/* <Form.Label>Image URL</Form.Label>  */}
      {/* <Form.Control defaultValue={props.itemInfo.digimonImg} type="text" placeholder="Enter stuff" name="image"/>  */}

      </Form.Group>

      <Button variant="primary" onClick={props.handleClose} type="submit">
        Update Item
      </Button>
      
    </Form>
            
          <Modal.Footer>

            <Button variant="primary" onClick={props.handleclose}>
              Close
            </Button>

          </Modal.Footer>
        </Modal>
      </>

    )
}

export default UpdateDigimonModal;