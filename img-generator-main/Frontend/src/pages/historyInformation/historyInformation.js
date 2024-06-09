import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../common/navbar/navbar";
const historyInformationPage = () => {
  const [data, setData] = useState(null);
  const { historyId } = useParams();

  const customStyles = {
    color: "white",
    padding: "48px",
  };

  const getData = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products/${historyId}`);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const obj = await res.json();
      console.log("Fetched data:", obj);
      setData(obj);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
      getData();
  }, []);

  if (!data) {
    return <div style={customStyles}>Loading...</div>;
  }

  return (
    <div>
      <Navbar page="historyInformation"/>
      <div style={customStyles}>
        <h3>Info of: {data.title}</h3>
        <img src={data?.thumbnail} alt={data.title} />
        <p src={data?.brand} />
        <p>{data.description}</p>
        {/* <img src={data?.images?.[0]}/> */}
      </div>
    </div>
  );
};
export default historyInformationPage;
