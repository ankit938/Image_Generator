import { Link } from "react-router-dom";



const HistoryCard = (props) => {
  const product = props.item;
  return (
    <div className="history-card">
      <h1> {product.title}</h1>
      <img src={product.images[0]} alt={product.title} />
      <h3>Brand: {product.brand}</h3>
      <h6>{product.description}</h6>
      <Link to={`/history/${product.id}`}>More</Link>
    </div>
  );
};
export default HistoryCard;
