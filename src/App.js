import NavbarCom from "./Layout/NavbarCom";
import axios from "axios";
import "./App.css";
import "./index.css";
import { useState } from "react"


function App() {
  const [postData, setPostData] = useState([]);
  const [showLoader, setshowLoader] = useState([true]);
  const getApiData = () => {
    axios 
      .get("https://jsonplaceholder.typicode.com/posts",)
      .then((res) => {
        console.log(res.data);
        setPostData(...res.data);
        setshowLoader(f);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const postApiData = () =>  
    axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      body: "abc",
      title: "ahj",
      userID: 100,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    
  return (
    <>
      <div>
        <NavbarCom />
        <button onClick={ getApiData }>get data</button>
        <button onClick={ postApiData }>post data</button>
      </div>  
    </>
  )
}

export default App;   
