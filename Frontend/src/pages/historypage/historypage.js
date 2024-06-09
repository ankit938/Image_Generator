import { useEffect, useState } from "react";
import Navbar from "../common/navbar/navbar";
import "./historypage.css";
import HistoryCard from "./historyCard";
const history = (props) => {
  
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const getData = async () => {
    try {
      const res = await fetch(
        `https://dummyjson.com/products/search?q=${searchText}`
      );
      const obj = await res.json();
      setData(obj.products);
      console.log(obj.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [searchText]);

  return (
    
    <div>
      <Navbar
        page="history"/>
      <div className="search-container">
        <input className="search-box-input"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          placeholder="Search products..."
        />
      </div>
      <div className="history-main-container">
        {data.map((item) => {
          return <HistoryCard item={item} />;
        })}
      </div>
    </div>
  );
};

export default history;
