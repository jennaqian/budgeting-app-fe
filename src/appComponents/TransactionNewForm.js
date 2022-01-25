import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function TransactionNewForm() {
  let { index } = useParams();
  const [transaction, setTransaction] = useState({
    name: "",
    date: "",
    amount: 0,
    from: "",
  });

  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(API_URL +`/transactions`, transaction)
    .then((res)=>{
      navigate("/transactions");
    }).catch((err)=>{
      console.log(err);
    })
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={transaction.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of transaction"
          required
        />
        <br />
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          value={transaction.date}
          type="date"
          onChange={handleTextChange}
          placeholder="Date of transaction"
          required
        />
        <br />

        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={transaction.amount}
          onChange={handleTextChange}
          placeholder="Amount of transaction"
          required
        />
        <br />

        <label htmlFor="from">From:</label>
        <input
          id="from"
          value={transaction.from}
          type="text"
          onChange={handleTextChange}
          placeholder="From"
          required
        />
        <br />

        <input type="submit" />
      </form>
    </div>
  );
}

export default TransactionNewForm;
