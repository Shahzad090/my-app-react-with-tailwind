import NavbarCom from "./Layout/NavbarCom";
import axios from "axios";
import "./App.css";
import "./index.css";


function App() {
  const getApiData = () => {
    axios 
      .get("https://jsonplaceholder.typicode.com/posts",)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const postApiData = () =>  {
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
    }
  return (
    <>
      <div>
        <NavbarCom />
        <button onClick={ getApiData }>get data</button>
        <button onClick={ postApiData }>post da</button>
      </div>  
    </>
  )


export default App;   
