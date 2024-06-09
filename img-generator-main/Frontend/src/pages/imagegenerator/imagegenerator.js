import Navbar from "../common/navbar/navbar";
import "./imagegenerator.css";
import PointsContext from "../../context/pointsContext";
// import Footer from "../common/footer/footer.js";
import {useState,useContext} from "react";



const ImageGenerator = (props) => {
  const cValue=useContext(PointsContext);
  const [searchText, setSearchText] = useState();
  const [imgSrc, setImgSrc] = useState("");

  const func = (e) => {
    setSearchText(e.target.value);
  };

  const handleClick = async () => {
    cValue.setUserPoints(cValue.userPoints-1);
    try{
    const res = await fetch(`https://img-generator-edna.onrender.com/api/v1/images`, {
      method: "POST",
      body: JSON.stringify({
          searchText: searchText,
      }),
      headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer "+localStorage.getItem("authorization"),
      },
  });
  const data = await res.json();
  if(data?.status === 'success'){
      setImgSrc(data.data.imageUrl);
  }
  }catch(err){
    console.log(err)
  }
}

  return (
    <div>
      <Navbar page="imagegenerator"/>
      <div className="image-generator-main-container">
        <div className="image-search">
          <img src={imgSrc} />
          <input
            placeholder="Search here"
            onChange={(e) => {
              func(e);
            }}
          />
          <button onClick={handleClick}>Generate</button>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default ImageGenerator;