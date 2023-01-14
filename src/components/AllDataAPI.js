import { useEffect, useState } from "react";
import axios from "axios";
import Item from "./item";

function AllDataAPI() {

    const [results, setResults] = useState([]);
    const [serverLink, setServerLink] = useState(process.env.REACT_APP_SERVER)
    const [showItems, setShowItems] = useState([]);

    // const [results, setResults] = useState([]);
    useEffect(() => {
        const getDigimon = async() =>{
            let resultAPI = await axios.get(
                `${serverLink}/digimonapi`
                );
                setResults(resultAPI.data);
                setShowItems(true);
                setServerLink();
        };
        getDigimon();
    },[]);



    return(
        <div>
            <h1>Get Digimon Characters from API</h1>
            <h3>Choose your favourites</h3>
            <div>
                {showItems &&
                results.map((item,index)=>(<Item key={index} item={item}/>))}
                
            </div>

        </div>
    )
}

export default AllDataAPI;