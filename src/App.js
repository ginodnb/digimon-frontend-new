
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/header";
import Footer from "./components/footer";
import Profile from "./components/login/Profile";
import AllDataAPI from "./components/AllDataAPI";
import MyFavourites from "./components/MyFavourites";
// import FavItem from './components/FavItem';


function App() {
  // const { isAuthenticated } = useAuth0();
  return (
    <>

    <BrowserRouter>
    <Header />
    <Routes>
    <Route exact path="/profile" element={<Profile/>}/>
      <Route exact path="/" element={<MyFavourites/>}/>
      <Route exact path="/getAPIdata" element={<AllDataAPI/>}/>

    </Routes>
    <Footer />

    </BrowserRouter>



    </>
  );

}

export default App;
