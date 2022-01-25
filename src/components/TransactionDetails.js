import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export default function TransactionDetails() {
  const [transaction, setTransaction] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();
  // console.log(API_URL)
  useEffect(() => {
    axios
      .get(API_URL + "/transactions/" + `${index}`)
      .then((res) => {
        setTransaction(res.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [index]);

  const handleDelete = () => {
    axios
      .delete(API_URL + `/transactions/${index}`)
      .then((res) => {
        navigate("/transactions");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <article className="article">
        <ul className="ul">
          <li className="fancyLi">Transaction Date:</li>
          <li className="fancyLi">Transaction Type:</li>
          <li className="fancyLi">Transaction From:</li>
          <li className="fancyLi">Transaction Amount:</li>
        </ul>
        <ul className="ul">
          <li>{transaction.date}</li>
          <li>{transaction.name}</li>
          <li>{transaction.from}</li>
          <li>{transaction.amount}</li>
        </ul>
        {/* <h3>Transaction Date: {transaction.date}</h3>
            <h3>Transaction Type: {transaction.name}</h3>
            <h3>Transaction From: {transaction.from}</h3>
        <h3>Transaction Amount: {transaction.amount}</h3> */}
      </article>
      <div className="buttonsForSingleTransaction">
        <div>
          <Link to={`/transactions`}>
            <button className="buttonForSingleTransaction">Return</button>
          </Link>
        </div>
        <div>
          <Link to={`/transactions/${index}/edit`}>
            <button className="buttonForSingleTransaction">Edit</button>
          </Link>
        </div>
        <div>
          <button className="buttonForSingleTransaction" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}
