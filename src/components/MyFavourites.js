import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axios from "axios";
import FavItem from "./FavItem";
import UpdateDigimonModal from "./UpdateDigimonModal";

function MyFavourites() {
  const [results, setResults] = useState([]);
  const [serverLink, setServerLink] = useState(process.env.REACT_APP_SERVER);
  const [showItems, setShowItems] = useState(false);
  // const [showEmpty, setShowEmpty] = useState(false);
  const [itemInfo, setItemInfo] = useState({});
  const [index, setIndex] = useState(0);
  const [showUpdateModalStatus, setShowUpdateModalStatus] = useState(false);

  useEffect(() => {
    const getFavDigimon = async () => {
      let resultDigimon = await axios.get(`${serverLink}/digimon`);
      console.log("GetFaveDigimon", resultDigimon.data);
      setResults(resultDigimon.data);
      // if (resultDigimon.data.length > 0) {
    //   setResults([...results, resultDigimon.data]);
      console.log(results);
      setShowItems(true);
      // setShowEmpty(false)
      // } else {
      // setShowItems(false);
      // setShowEmpty(true);
      // }
    };
    getFavDigimon();
  }, []);

  // const deleteDigimon = async (index) => {
  //     // console.log(serverLink)
  //     let resultsDigimon = await axios.delete((`${serverLink}/digimon/${index}`));
  //     // console.log("after deleting", resultsDigimon.data)
  //     setResults(resultsDigimon.data);
  //     // setShowItems(true)
  // }

  // const showUpdateModal = async(chosenItem) =>{
  //     setShowUpdateModalStatus(true);
  //     setItemInfo(chosenItem);
  //     setIndex(chosenItem._id);

  // }

  // const handleCloseUpdate = () => {
  //     setShowUpdateModalStatus(false)
  // }

  // const updateItemsArray = (results) => {
  //     setResults(results)
  // }

  return (
    <div>
      <h1>your fave Digimon</h1>

      <div
        style={{
          display: "flex",
          flexFlow: "row",
          flexWrap: "wrap",
          padding: "4rem",
        }}
      >
        {showItems &&
          results.map((item, index) => {
            <FavItem
              index={index}
              item={item}
              // deleteDigimon = {deleteDigimon}
              // showUpdateModalProps = {showUpdateModal}
            />;
          })}
      </div>

      {/* <UpdateDigimonModal 
            show={showUpdateModalStatus}
            handleClose={handleCloseUpdate}
            itemInfo={itemInfo}
            itemIndex={index}
            // updateDigimons = {updateDigimons}
            updateItemsArray={updateItemsArray}
            />  */}
    </div>
  );
}

export default MyFavourites;
