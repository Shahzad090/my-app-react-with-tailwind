import NavbarCom from "./Layout/NavbarCom";
import axios from "axios";
import "./App.css";
import "./index.css";
import { useState } from "react";
// import { Button } from "antd";

function App() {
  const [postData, setPostData] = useState([]);
  const [showLoader, setshowLoader] = useState([true]);
  const getApiData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        setPostData(...res.data);
        setshowLoader(false);
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

  const editData = () => {
    axios.put("https://jsonplaceholder.typicode.com/posts/1"),
      {
        title: "ab",
        body: "xyz",
      };
  };

  const deleteData = () => {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/1")
      .then(() => {
        console.log("deleted successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <NavbarCom />
        <button onClick={getApiData}>get data</button>
        <button onClick={postApiData}>post data</button>
        <button onClick={editData}>edit data</button>
        <button onClick={deleteData}>delete data</button>
      </div>
        
    </>
  );
}

export default App;
